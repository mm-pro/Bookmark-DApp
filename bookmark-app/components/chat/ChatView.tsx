import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { Client, DecodedMessage } from "@xmtp/xmtp-js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ethers } from "ethers";
import { useWallet } from "@wallet01/react";

type ChatViewProps = {
  walletAddress: string;
};

export default function ChatView({ walletAddress }: ChatViewProps) {
  const [isXmtpClient, setIsXmtpClient] = useState<boolean>(false);
  const [updatedMessages, setUpdatedMessages] =
    useState<DecodedMessage[] | null>(null);
  const [isNotOnNetwork, setIsNotOnNetwork] = useState<boolean>(false);
  const { address: userAddress } = useWallet();

  if (!userAddress || !window) return null;

  const provider: ethers.providers.Web3Provider | undefined = useMemo(() => {
    if (window.ethereum) {
      return new ethers.providers.Web3Provider(window.ethereum);
    }
  }, []);

  const signer: any = useMemo(() => {
    if (!userAddress || !provider) return;
    return provider.getSigner();
  }, [provider, userAddress]);

  const conversation = useCallback(async () => {
    if (!walletAddress || !provider || !signer) return;
    try {
      const xmtp = await Client.create(signer);
      if (xmtp) {
        setIsXmtpClient(true);
      }
      const conversation = await xmtp.conversations.newConversation(
        walletAddress
      );
      return conversation;
    } catch (e: any) {
      setIsXmtpClient(false);
      console.log(e);
      if (e.message.includes("not on the XMTP network")) {
        setIsNotOnNetwork(true);
      }
    }
  }, [signer, walletAddress]);

  const messages = useCallback(async () => {
    const newConversations = await conversation();
    if (!newConversations) return;
    const messages = await newConversations.messages();
    setUpdatedMessages(messages);
    return messages;
  }, [conversation]);


  useEffect(() => {
    if (isXmtpClient) {
      messages();
    }
  }, [isXmtpClient, messages]);

  async function sendMessage(textContent: string) {
    const newConversations = await conversation();
    if (!newConversations) return;
    const sendMessage = newConversations.send(textContent);
    return sendMessage;
  }

  return (
    <div className="w-1/3">
      {!isXmtpClient &&
        (!isNotOnNetwork ? (
          <button
            onClick={() => conversation()}
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            {" "}
            Start Conversation with {walletAddress}
          </button>
        ) : (
          <div className="flex px-4 w-2/12 flex-wrap">
            {" "}
            {walletAddress} is not on the network. You cannot chat with them at
            the moment
          </div>
        ))}
      {isXmtpClient && (
        <div
          style={{
            position: "relative",
            height: "700px",
            marginLeft: "5%",
            width: "100%",
          }}
        >
          <MainContainer>
            <ChatContainer>
              <MessageList>
                {updatedMessages?.map((message) => (
                  <Message
                    key={message.id}
                    model={{
                      message: message.content,
                      sentTime: message.sent.toString(),
                      sender: message.senderAddress,
                      direction:
                        message.senderAddress.toLowerCase() ===
                        walletAddress.toLowerCase()
                          ? "outgoing"
                          : "incoming",
                      position: "normal",
                    }}
                  />
                ))}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                sendButton={true}
                onSend={(textContent) => {
                  sendMessage(textContent);
                }}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      )}
    </div>
  );
}
