import AnimatedClock from './clock/Clock';

export const App = () => {
  return (
    <>
      <div className="absolute -z-50 w-screen h-screen bg-purple bg-gradient-to-tr from-purple to-orange"></div>
      <main className="w-screen h-screen flex flex-col justify-evenly items-center">
        <h1 className="text-white bg-transparent text-3xl tracking-widest font-thin">COMING</h1>
        <AnimatedClock />
        <h1 className="text-white bg-transparent text-3xl tracking-widest font-thin shadow-2xl">SOON</h1>
      </main>
    </>
  );
};
