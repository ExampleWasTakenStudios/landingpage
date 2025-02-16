import { Clock } from './clock/Clock';

export const App = () => {
  return (
    <>
      <div className="absolute -z-50 w-screen h-screen bg-purple bg-gradient-to-tr from-purple to-orange"></div>
      <main className="w-screen h-screen flex flex-col justify-evenly items-center">
        <h1 className="text-white text-3xl tracking-widest font-thin drop-shadow-clockHand">COMING</h1>
        <Clock />
        <h1 className="text-white text-3xl tracking-widest font-thin drop-shadow-clockHand">SOON</h1>
      </main>
    </>
  );
};
