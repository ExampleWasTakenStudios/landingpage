import { Clock } from './clock/Clock';

export const App = () => {
  return (
    <>
      <div className="absolute -z-50 w-screen h-screen bg-purple">
        <div className="bg-profilePicture w-full h-full bg-no-repeat bg-contain bg-[-30px] blur-[100px]"></div>
      </div>
      <main className="w-screen h-screen flex flex-col justify-evenly items-center">
        <h1 className="text-white text-3xl tracking-widest font-thin">COMING</h1>
        <Clock />
        <h1 className="text-white text-3xl tracking-widest font-thin">SOON</h1>
      </main>
    </>
  );
};
