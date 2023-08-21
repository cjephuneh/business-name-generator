import React from 'react'

function App() {
  return (
  <main class="mt-32">
    <div class="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* <form class="space-y-8 divide-y divide-gray-200" on:submit="{handleSubmit}"> */}
          <form class="space-y-8 divide-y divide-gray-200" >

        <div class="pt-8">
          <div>
            <h3 class="text-lg font-medium leading-6 text-gray-900">Business name generator</h3>
            <p class="mt-1 text-sm text-gray-500">Generates a list of business names.</p>
          </div>
          <div class="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="industry" class="block text-sm font-medium text-gray-700"> Industry </label>
              <div class="mt-1">
                <input
                  // bind:value="{industry}"
                  type="text"
                  name="industry"
                  id="industry"
                  required
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="tone" class="block text-sm font-medium text-gray-700">
                Desired tone/style
              </label>
              <div class="mt-1">
                <input
                  // bind:value="{tone}"
                  id="tone"
                  name="tone"
                  type="text"
                  required
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div class="sm:col-span-6">
              <label for="keywords" class="block text-sm font-medium text-gray-700"> Keywords </label>
              <div class="mt-1">
                <input
                  // bind:value="{keywords}"
                  type="text"
                  name="keywords"
                  id="keywords"
                  required
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              // disabled="{!isLoading}"
              class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Generate
            </button>

            {/* {#if $completion} */}
            <div class="sm:col-span-6">
              <label for="about" class="block text-sm font-medium text-gray-700"> Suggestions </label>
              <textarea
                id="suggestions"
                name="suggestions"
                rows="10"
                // value="{$completion}"
                class="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* {/if} */}
          </div>
        </div>
      </form>
    </div>
</main>
  )
}

export default App





