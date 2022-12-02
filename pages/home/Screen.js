import { success, notDone } from '../../components/icons/Icons';

export default function Screen()
{
  const results = [
    {time: '35 seconds'},
    {time: '66 seconds'},
    {time: ''},
    {time: ''},
    {time: ''},
    {time: ''},
    {time: ''},
  ];


  return (
    <div className="p-1 flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
          <div className="flex-1 overflow-y-auto py-1 px-2">
            <div className="mt-1">
              <div className="grid grid-rows-4 grid-flow-col">
                {results.map((result, i) => (
                  <div key={i} className="flex py-2">
                    <div className="badge-blue">{i+1}</div>

                    {result.time ? success : notDone}

                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h4>
                          {result.time ? result.time : 'not done'}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  );
}
