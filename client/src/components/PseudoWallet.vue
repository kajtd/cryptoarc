<template>
  <div
    class="bg-blueDark flex flex-col justify-center pt-24 max-w-sm rounded-3xl p-4 mt-12 md:mt-0 md:mb-12 md:mr-12"
  >
    <h4 class="text-center text-sm font-medium">Current Wallet Balance</h4>
    <h2 class="text-gray-200 font-bold text-center text-4xl my-3">0.0952 ETH</h2>
    <select
      name="network"
      id="network"
      class="my-2 w-1/2 self-center rounded-md p-3 outline-none bg-gray-900 focus:bg-gray-900 bg-opacity-60 text-gray-400 border-none text-sm"
    >
      <option value="Rinkeby" selected>Rinkeby</option>
      <option value="Mainnet">Mainnet</option>
      <option value="Ropsten">Ropsten</option>
    </select>
    <form action="" class="bg-gray-800 bg-opacity-50 bg-clip-padding shadow-xl p-4 rounded-xl mt-4">
      <input
        placeholder="Address To"
        name="addressTo"
        type="text"
        class="my-2 w-full rounded-md p-3 outline-none bg-gray-900 bg-opacity-60 text-gray-400 border-none text-sm"
      />
      <input
        placeholder="Amount"
        name="amount"
        type="number"
        class="my-2 w-full rounded-md p-3 outline-none bg-gray-900 bg-opacity-60 text-gray-400 border-none text-sm"
      />
      <textarea
        placeholder="Message"
        name="message"
        type="text"
        class="my-2 w-full rounded-md p-3 outline-none bg-gray-900 bg-opacity-60 text-gray-400 border-none text-sm"
      />
      <input
        type="submit"
        value="Send"
        class="bg-green-500 w-full mt-2 py-4 rounded-md shadow-2xl shadow-green-500 cursor-pointer"
      />
    </form>
  </div>
</template>
