# Bookmark DApp
Superconnector of like-minded people based on their web3 identities

## Project Links

[Figma Link](https://www.figma.com/file/kedyXC9PQtMLkAK18nGhOX/Bookmark-DApp?node-id=0%3A1)

[Video Demo](https://youtu.be/J4QTiehvpbI)

[Live Website](https://bookmark-d-app.vercel.app/)

## Start local project

```
cd bookmark-app
yarn 
yarn dev
```

## Summary

Bookmark is a superconnector of like-minded people based on their web3 identities. Make web3 friends, learn from the best in the space, and stay up-to-date with their web3 activity.

On the dapp dashboard, users who connect their wallet can:

1. **sign up for weekly matches** of **users with similar wallet profiles**. get **access to video and text chats** with them. Wallet profile matches are based on similar token and NFT ownership, DAO voting, and Push Protocol channel memberships. 

2. **post and answer questions** on topics that they are experts in

3. **"bookmark" community members** whom they've chatted with or helped and **receive regular, roll-up newsletters** on:

- their token and NFT investments
- DAOs or web3 communities they've joined
- Dapps they've connected to

4. **earn rewards** for dapp activity. **redeem rewards** to **chat and bookmark top leaders** in the space

## Consumer Problems

The dapp seeks to incentivize knowledge sharing and community bonding, and enhance meaningful product discovery. 

**People want to learn from experts. Experts want to get paid for providing knowledge.**

Without contributor pay, community help platforms such as Reddit and Stack Overflow accumulate more unanswered questions. Mentors on volunteer-based live-chat platforms such as LunchClub and ADPList and community organizations suffer from burnout and eventually stop contributing. 

By rewarding quality contributions, we ensure people continue to seek knowledge. A knowledgeable community produces better developers, designers, and product leaders who are ready to work in the space. 

**People want to connect with others who are similar to them, _especially_ those who crossed paths with them.**

Unlock the people who've attended the same conferences and events, participate in the same DAOs, love the same NFT creators, but have never talked to. Find the people who will help advance your career or build the next project with.

**People want to speak the truth without the risks of being identified.**

A web3 wallet is an equivalent to a throwaway email without identifying personal information and with the credibility. Communicating as and to a web3 wallet maintains anonymity and confirms expertise through on-chain activity such as POAPs and DAO memberships. 

**People want to try out things that have been tested and approved by people whom they admire. But they don't like clutter in their inboxes.**

Subscribing to social media notifications and mailing lists leads to spam. Current web3 notifications are often uncontextualized messages on transactions. 

Contextualizing wallet activity into listings of products and communities used by people they admire will help them discover and support the best of web3. 

## Full Features

**User Profile**

A dapp user is identified by their wallet on Polygon / Ethereum. In the future, a dapp user can connect multiple wallets on different chains. 

**Sign in page**:

![Bookmark DApp-1](https://user-images.githubusercontent.com/38402540/211172283-1697074e-fe77-4b74-934c-3ba94bf02b18.png)

**Main dashboard with all core features**:

![Bookmark DApp-2](https://user-images.githubusercontent.com/38402540/211172297-6a7f3ac7-f32c-4d39-9d6c-b126087543ad.png)

### Weekly Matches

- A dapp user can sign up for weekly matches of wallets that are similar to theirs. 
- Wallet profile matches are calculated as a percentage and are based on similar token and NFT ownership, DAO voting, and Push Protocol channel memberships. 
- A dapp user is notified of a match on the dapp dashboard and to communication channels that they linked to their profile.
- A text chat powered by XMTP and ability to start a video chat powered by Huddle are created upon a match.

**Chat with all matches**:

![Bookmark DApp-3](https://user-images.githubusercontent.com/38402540/211172304-64176ce2-3cc1-4509-b647-e22aec3c69da.png)

**Call with a match**:

![Bookmark DApp-4](https://user-images.githubusercontent.com/38402540/211172308-02771c59-6d5f-4eef-8788-a5dcc3fe20d2.png)

**Other future features**

- Get matches by token communities. A dapp user can update their settings to allow only matches from specific token communities (ex. a dapp user who holds a Bored Ape can update a setting to only allow matches of other users who hold a Bored Ape.).

### Web3 Help Forum

- A dapp user can post questions on any web3-related topics from NFTs to entrepreneurship to smart contracts. They can list if they prefer an answer via a live call or as a text-based post.
- The question post will show a link to the profile of the original poster, question, and their preferred reply method. 
- Each question post, no matter their preferred reply method, will allow responders to post a text reply, schedule a video call meeting, or request an impromptu video call meeting if the original poster is online.

**Example of question post**:
![Bookmark DApp-7](https://user-images.githubusercontent.com/38402540/211172319-8ddd28e7-8ff8-4662-94c3-082f7e220340.png)

**Other future features**
- Token-gated posts. A dapp user can allow holders of certain tokens to reply.

### Bookmark The Community

- A dapp user can "bookmark" or subscribe to wallets that they have chatted with or answered a question of on the dapp without using any reward points.
- A bookmark icon is enabled on a user profile that the dapp user has chatted with or answered a question of. The bookmark icon is highlighted upon clicking to subscribe. 
- The dapp user will receive a weekly or monthly newsletter on the following of all of their bookmarked wallets:

   - their token and NFT investments
   - DAOs or web3 communities they've joined
   - Dapps they've connected to 

**Example of newsletter**:
![Bookmark DApp-6](https://user-images.githubusercontent.com/38402540/211172325-810b716f-df2d-44ff-b8e1-77d401de1cf2.png)
   
- A dapp user can "bookmark" or subscribe to wallets they have not interacted with by using reward points. The cost of bookmarking a non-interacted wallet will depend on how popular the wallet is (ex. known leader, whale, etc.).

**Other future features**
- A dapp user can opt to enable bookmarking, even if the subscriber has not yet interacted with them through the dapp, for no reward points.

### Rewards Program

- A dapp user is rewarded tokens for activity on the dapp including:

1. text and video chat through the match feature
2. replying to questions through the forum feature

**Future rewards**:
- Joining communities and using products of bookmarked wallets.
- Inviting owners of wallets that are not yet active on the platform.

- A dapp user can redeem the rewards to chat with and bookmark top wallets that they have not interacted with yet (ex. unlocking chat and bookmarking of Vitalik).

## What's Been Build Thus Far

**User Login**

- Currently built using Huddle01's Wallet01, account address display also resolves to ENS if available

**Weekly Matches**

Currently, the matches are based off of NFT Port's Retrieve NFTs owned by an account API on Polygon. A user receives an instant match when they sign up for matches. In the future, I will utilize other data, machine learning approaches, and store the matches in Cermaic DB so they are not replicated. 

A Huddle01 call is created upon a match. The user has an option to create an XMTP chat with the match. 

- Currently built using NFT Port, Huddle01 IFrame SDK, XMTP
- A Ceramic Compose DB model for storing user profile data, including if the user wants to sign up for weekly matches, has been created. We are working with Ceramic to properly create the composite.

**Bookmark**

Currrently, you can bookmark Push Protocol Channels based on any search item. In the future, we will enable bookmark user addresses and use NFT Port to index data on a user.

- Currently built using Push Protocol. 

Please review issues for [upcoming work](https://github.com/jennifertrin/BookmarkDApp/issues).








