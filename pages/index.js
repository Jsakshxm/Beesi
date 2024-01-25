import Link from "next/link"
const MacBookAir = () => {
  return (<>
    <div className="w-full relative bg-white h-[52rem] overflow-hidden text-center text-[1.03rem] text-white font-montserrat ml-20">
      <div className="absolute top-[0rem] left-[0rem] w-[80rem] h-[52rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[80rem] h-[52rem] text-left text-[2.56rem] text-black">
          <div className="absolute top-[0rem] left-[0rem] bg-white w-[80rem] h-[52rem]" />
          <img
            className="absolute top-[25.43rem] left-[12.64rem] w-[10.34rem] h-[7.74rem] object-contain"
            alt=""
            src="/arrow-1.svg"
          />
          <img
            className="absolute top-[22.31rem] left-[31.47rem] w-[10.97rem] h-[5.83rem] object-contain"
            alt=""
            src="/arrow-2.svg"
          />
          <img
            className="absolute top-[27.18rem] left-[52.86rem] w-[12.01rem] h-[4.46rem] object-contain"
            alt=""
            src="/arrow-3.svg"
          />
          <b className="absolute top-[4.5rem] left-[30.63rem] inline-block w-[18.75rem]">
            How It Works
          </b>
        </div>
        <div className="absolute top-[31.59rem] left-[5.51rem] w-[9.83rem] h-[10.26rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-blueviolet w-[9.83rem] h-[10.26rem]" />
          <b className="absolute top-[5.69rem] left-[1.52rem] inline-block w-[6.82rem] h-[2.56rem]">
            <p className="m-0">Step 1:</p>
           <Link href={"/start"} className="flex text-white"> <p className="m-0">Set your goal</p> </Link>
          </b>
          <img
            className="absolute top-[1.44rem] left-[3.39rem] w-[3.07rem] h-[3.21rem] object-cover"
            alt=""
            src="/goal-2@2x.png"
          />
        </div>
        <div className="absolute top-[20.87rem] left-[22.96rem] w-[9.83rem] h-[10.26rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-blueviolet w-[9.83rem] h-[10.26rem]" />
          <b className="absolute top-[5.13rem] left-[1.35rem] inline-block w-[7.19rem] h-[3.85rem]">
            <p className="m-0">Step 2:</p>
            <p className="m-0">Create or Join</p>
            <p className="m-0"> Group</p>
          </b>
        </div>
        <div className="absolute top-[25.49rem] left-[42.43rem] w-[9.83rem] h-[10.26rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-blueviolet w-[9.83rem] h-[10.26rem]" />
          <b className="absolute top-[5.13rem] left-[1.52rem] inline-block w-[7.03rem] h-[4.1rem]">
            <p className="m-0">Step 3:</p>
            <p className="m-0">Pay amount on time</p>
          </b>
          <img
            className="absolute top-[1.8rem] left-[3.84rem] w-[2.46rem] h-[2.56rem] object-cover"
            alt=""
            src="/payperclick-1@2x.png"
          />
        </div>
        <div className="absolute top-[18.31rem] left-[63.92rem] w-[9.83rem] h-[10.26rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-blueviolet w-[9.83rem] h-[10.26rem]" />
          <b className="absolute top-[5.13rem] left-[1.54rem] inline-block w-[6.82rem] h-[2.56rem]">
            <p className="m-0">Step 4:</p>
            <p className="m-0">Earn Rewards</p>
          </b>
          <img
            className="absolute top-[1.85rem] left-[3.74rem] w-[2.46rem] h-[2.56rem] object-cover"
            alt=""
            src="/giftcard-1@2x.png"
          />
        </div>
        <img
          className="absolute top-[22.67rem] left-[26.65rem] w-[2.46rem] h-[2.56rem] object-cover"
          alt=""
          src="/addfriend-1@2x.png"
        />
      </div>
      
    </div></>
  );
};

export default MacBookAir;
