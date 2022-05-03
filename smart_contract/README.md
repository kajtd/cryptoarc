<div id="top"></div>

<!-- PROJECT HEADER -->
<br />
<div align="center">
  <a href="https://github.com/kajtd/cryptoarc">
    🔗
  </a>

<a href="https://cryptoarc.netlify.app/">
  <h3 align="center">Cryptoarc</h3>
</a>
  <p align="center">
    Web3 dapp that allows you to send Ethereum through the blockchain network.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#technologies">Technologies</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ul>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Website gif](https://api.apify.com/v2/key-value-stores/DZICAZ5C5SqFeTEob/records/cryptoarc.netlify.app-scroll_original)

Cryptoarc is a web3 dapp for sending ETH to others through the blockchain network. Client written in Vue and Typescript interacts with Solidity smart contract and allows you to log in with Metamask and send transactions.

<!-- TECHNOLOGIES -->

## Technologies

```js
- Vue: 3.0.0
- Typescript: 4.1.5
- Ethers: 5.5.1
- TailwindCSS: 2.2.17
- Solidity: 0.8.0
```

<p align="right">(<a href="#top">back to top</a>)</p>
<!-- GETTING STARTED -->

## Getting Started

Here is how you can set up this project by yourself.
To get a local copy up and running follow these simple example steps.

### Installation - client

1.  Go to the [RapidAPI](https://rapidapi.com/).
2.  Get API options for [Coinranking API Documentation](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1) and [Bing News Search API Documentation](https://rapidapi.com/Coinranking/api/coinranking1/details).
3.  Enter your API key in `client/.env`.
    ```sh
    VUE_APP_API_KEY = 'ENTER YOUR API KEY'
    ```
4.  Install NPM packages and run the app.
    ```sh
    cd client
    npm install
    npm run netlify dev
    ```

### Installation - smart contract

1.  Go to the [Alchemy](https://www.alchemy.com/).
2.  Create app running on Ethereum chain and Ropsten network.
3.  Log in to your Metamask wallet and get private key.
4.  Enter your private key and alchemy api url in `smart_contract/.env`.
    ```sh
    ALCHEMY_API_KEY_URL = 'ENTER YOUR ALCHEMY API URL'
    ROPSTEN_PRIVATE_KEY = 'ENTER YOUR PRIVATE KEY'
    ```
5.  Install NPM packages.
    ```sh
    cd smart_contract
    npm install
    ```
6.  Deploy smart contract.
    ```sh
    npx hardhat run scripts/deploy.js --network ropsten
    ```
7.  Copy smart contract address from terminal and paste it into `client/src/utils/constants.js`.
    ```js
    export const contractAddress = 'YOUR SMART CONTRACT ADDRESS';
    ```
8.  Copy smart contract abi from `smart_contract/artifacts/contracts/Transactions.json` and paste it into `client/src/utils/Transactions.json`.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE -->

## Usage

Below you can read the instructions on how to send transactions to everyone else through the blockchain:

<ol>
    <li>Connect your Metamask wallet to the dapp</li>
    <li>Use wallet form to send transaction to other account(make sure you've chosen Ropsten test network in Metamask)</li>
    <li>When your transaction is completed, you can see it in "Latest transactions" section</li>
</ol>

You can also see how does the current market look like and read latest crypto news, both fetched from external API.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Sending different tokens than **ETH**
- [ ] Switching through the networks
- [ ] Personalized transactions management

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [Bitcoin animation](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>
