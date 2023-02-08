export default function CreateForm({ locationUpdateHandler }) {
  return (
    <aside>
          <form className="flex w-3/4 p-6 mx-auto my-6 bg-gray-200" onSubmit={locationUpdateHandler}>
            <fieldset>
              <legend className='content-center w-1/4 mx-auto my-4 bg-gray-200'>Create Cookie Stand</legend>
              <label className='content-center mx-2 my-2 d-block'>Location
                <input className='content-center mx-2 my-2 w-10/12 d-block' type="text" name="location" placeholder=" ex: Rome" required />
              </label>
              <label className='inline-grid text-center justify-between p-2'>Min Customers per Hour
                <input className='mx-2 my-2' type="number" name="min" required />
              </label>
              <label className='inline-grid text-center justify-between p-2 my-9 d-block'>Max Customers per Hour
                <input className='mx-2 my-2 d-block' type="number" name="max" required />
              </label>
              <label className='inline-grid text-center justify-between p-2 my-6 d-block'>Avg Cookies per Customer
                <input className='mx-2 my-2 d-block' type="number" name="avg" required />
              </label>

              <button className="inline-grid text-center w-48 mx-2 my-2 px-6 py-4 bg-gray-500 text-gray-50">Create</button>
            </fieldset>
          </form>
        </aside>
  );
}
