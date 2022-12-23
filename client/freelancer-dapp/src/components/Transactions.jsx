const Transaction = () => {
  return ( 
  <div className="chain flex flex-row justify-center" id="start" >
    <div class="flex flex-col justify-center place-center h-[32rem] bg-gray-100 w-2/5 py-12 lg:px-8 rounded-3xl">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img class="mx-auto h-12 w-auto" src="src\components\assets\FD.ico" alt="Workflow" />
        <h2 class="mt-6 text-center text-2xl font-extrabold text-gray-900">Creating A Freelance Project</h2>
        <p class="mt-2 text-center text-sm text-gray-600 max-w">
         Did you connect your wallet?
        </p>
      </div>
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
       <form className="mb-0 space-y-6" action="">
        <div>
          <label for="price" class="block text-sm font-medium text-gray-700">Project Price</label>
          <div class="mt-1 border-indigo-400">
            <input className="w-full border-spacing-3 py-2 bg-gray-100 rounded-md" id="price" placeholder="- ETH"/>
          </div>
        </div>
        <div>
         <label for="deadline" class="block text-sm font-medium text-gray-700">Project Deadline</label>
          <div class="mt-1">
            <input className="w-full border-spacing-3 py-2 bg-gray-100 rounded-md" id="deadline" placeholder="- Days"/>
          </div>
        </div>
       </form>
       <div className="shadow-lg pt-4">
          <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">Next</button>
        </div>
      </div>
    </div>
  </div> );
}
 
export default Transaction;