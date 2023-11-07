import { FaStore } from "react-icons/fa6"

export const JumbotronFooter = () => {
    
    return (
      <>
          <div className="bg-cover bg-center mt-12 h-96 bg-[url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <h1 className="font-link text-white w-full inline-flex justify-end items-end px-4 py-4 text-xl font-medium">
                <FaStore />ARSHION 
            </h1>
                <div className="space-y-4">
                    <h1 className="font-link underline w-full inline-flex  justify-center items-center font-bold text-white text-4xl">
                        Location Store
                    </h1>
                    <div className="space-y-2">
                        <h2 className="text-xl font-medium w-full inline-flex text-white justify-center items-center">
                            Jakarta
                        </h2>
                        <p className="text-base w-full inline-flex text-white justify-center items-center">
                            Jakarta Selatan - Jln Fatmawati No.7
                        </p>
                        <h2 className="text-xl font-medium w-full inline-flex text-white justify-center items-center">
                            Bandung
                        </h2>
                        <p className="text-base w-full inline-flex text-white justify-center items-center">
                            Bandung Selatan - Jln Cibaduyot No.22
                        </p>
                        <h2 className="text-xl font-medium w-full inline-flex text-white justify-center items-center">
                            Yogyakarta
                        </h2>
                        <p className="text-base w-full inline-flex text-white justify-center items-center">
                            Kota Yogyakarta - Jln Malioboro No.10
                        </p>
                    </div>
                </div>
          </div>
      </>
    )
  }
