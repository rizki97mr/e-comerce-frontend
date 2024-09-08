const Jumbotron = () => {
  return (
    <>
      <div className="bg-cover bg-[url('https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="px-8 py-32">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="inline-flex items-center justify-center w-full text-6xl font-extrabold text-white font-link">
                DISCOUNT UP TO 50%
              </h2>
              <p className="inline-flex items-center justify-center w-full text-xl font-light text-white">
                From September 30, 2023 - October 25, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
