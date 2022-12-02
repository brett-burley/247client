import Screen from './home/Screen';
import Controls from './home/Controls';

const Home = () => {
  return (
    <div className="max-w-xl w-full h-full">
      <div className="h-1/3 border-solid border-2 mt-4">
        <Screen />
      </div>

      <div className="h-2/3">
        <Controls />
      </div>
    </div>
  )
}

export default Home
