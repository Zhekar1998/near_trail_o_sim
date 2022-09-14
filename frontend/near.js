import * as nearAPI from "near-api-js"
import "./main_page.js"
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
import inspect from 'browser-util-inspect';
import { utils } from "near-api-js";
import { create } from 'ipfs-http-client';
import { findSeatPrice } from "near-api-js/lib/validators";
import 'fs';
import { async } from "regenerator-runtime/runtime";




window.nearConfig = {
    networkId: 'testnet',
    nodeUrl: 'https://rpc.testnet.near.org',
    contractName: 'crowndfound.testnet',
    walletUrl: 'https://wallet.testnet.near.org',
    helperUrl: 'https://helper.testnet.near.org'
};

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEM3MDQ0ZjcyRkExYTQzMmZiRjE1ZUE2MkIyNTc2MzlCRjQ0NUY5QUQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDE1NjM3Nzg1MzUsIm5hbWUiOiIxIn0.l33kUNtDs5irZj40uCh2WHoUgCl31T9WSbSSkbxV1_I";


function makeStorageClient() { return new Web3Storage({ token }) }

async function storeFiles(files) {
    const client = makeStorageClient();
    const cid = await client.put(files);
    console.log('stored files with cid:', cid);
    return cid;
}

async function initContract() {
    // Initializing connection to the NEAR node.

    window.near = await nearAPI.connect(Object.assign({ deps: { keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore() } }, nearConfig));

    // Initializing Wallet based Account. It can work with NEAR TestNet wallet that
    // is hosted at https://wallet.testnet.near.org
    window.walletAccount = new nearAPI.WalletAccount(window.near);

    // Getting the Account ID. If unauthorized yet, it's just empty string.
    window.accountId = window.walletAccount.getAccountId();


    // Initializing our contract APIs by contract name and configuration.
    window.contract = new nearAPI.Contract(window.walletAccount.account(), "etopict.testnet", {
        // NOTE: This configuration only needed while NEAR is still in development
        // View methods are read only. They don't modify the state, but usually return some value.
        // Sender is the account ID to initialize transactions.

        viewMethods: ["get_competitions_short", "is_register", "get_profile_part"],
        // Change methods can modify the state. But you don't receive the returned value when called.
        changeMethods: ["add_donation", "donate", "register"],
        sender: window.accountId,
    });

}