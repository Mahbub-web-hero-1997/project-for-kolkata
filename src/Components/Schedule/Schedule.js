import React from 'react';
import img1 from '../../Images/logo1.PNG'
import img2 from '../../Images/logo2.PNG'
import img3 from '../../Images/logo3.PNG'

const Schedule = () => {
    return (
        // Schedule Section
        <section className='w-full md:w-11/12 mx-auto'>
            <h1 className='text-3xl font-semibold text-left'>Schedule your pickup of eco-waste</h1>
            {/* First Section Start */}
            <div className='w-full relative h-52 mt-20 mb-40'>
                <div className='absolute top-[-5px] left-0 w-[35px] h-[35px] rounded-[50%] border-2 border-yellow-500 text-center flex justify-center items-center'>
                    <span>1</span>
                </div>
                <h6 className='font-semibold text-left mx-left ml-20 mt-16'>CHECK AVAILABILITY</h6>
                <div class="form-control ml-20 mt-8 text-left">
                    <label class="input-group mb-5">
                        <input type="text" placeholder="560025" class="input input-bordered" />
                        <button className='btn bg-lime-400 border-0 text-white'>Check Availability</button>
                    </label>
                    <span>Area <span className='text-green-400'>560025</span> serviceable add your address to continue</span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 ml-20 border-b-2 mb-52'>
                    <div className='border-2 flex justify-between p-3 rounded-lg h-[170px]'>
                        <div className='h-[20px]  flex items-center'>
                            <input className='w-[20px] h-[20px]  ' type="checkbox" name="" id="" />
                            <span className='ml-2'>Pickup from this address</span>
                        </div>
                        <a href="#">Edit</a>
                    </div>
                    <div className='border-2 flex items-center justify-center font-semibold rounded-lg h-[170px]'>
                        <a href='#'>Add New Address</a>
                    </div>
                    <img className='w-3/2 h-full text-left' src={img1} alt="" />
                </div>
            </div>
            {/* First Section End */}

            {/* Second Section Start */}
            <div className='relative mt-[300px] mb-10'>
                <div className='absolute top-[-5px] left-0 w-[35px] h-[35px] rounded-[50%] border-2 border-yellow-500 text-center flex justify-center items-center'>
                    <span>1</span>
                </div>
                <div className='grid grid-cols-3'>
                    <h6 className='font-semibold text-left mx-left ml-20 '>Select what you have</h6>
                    <h6 className='font-semibold text-left mx-left ml-20 '>Select what you have</h6>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 ml-20 border-b-2'>
                    {/* 2.1 section*/}

                    <div className='relative'>
                        <div class="form-control mb-5">
                            <label class="label flex justify-start cursor-pointer">
                                <input type="radio" name="radio-4" class="radio radio-accent" />
                                <span class="label-text ml-2">Papers</span> <br />
                            </label>
                            <span class="label-text block ml-10 mt-[-10px] text-left opacity-60">( Books, magazines etc. )</span>
                        </div>
                        <div class="form-control mb-5">
                            <label class="label flex justify-start cursor-pointer">
                                <input type="radio" name="radio-4" class="radio radio-accent" />
                                <span class="label-text ml-2">Light weight- waste</span> <br />
                            </label>
                            <span class="label-text block ml-10 mt-[-10px] text-left opacity-60">( Keyboards, Monitors, Mobile etc. )</span>
                        </div>
                        <div class="form-control mb-5">
                            <label class="label flex justify-start cursor-pointer">
                                <input type="radio" name="radio-4" class="radio radio-accent" />
                                <span class="label-text ml-2">Large appliance</span> <br />
                            </label>
                            <span class="label-text block ml-10 mt-[-10px] text-left opacity-60">( Refrigerator, TV, Washing machine etc. )</span>
                        </div>
                    </div>
                    {/* 2.2 Section */}
                    <div className='border-l-2 h-[300px] pl-5'>
                        <div className='flex'>
                            <div className='text-left border-r-2 pr-10'>
                                <p>Non-Periodic</p>
                                <div className="flex items-center mt-5">
                                    <input type="radio" name="radio-5" class="radio radio-accent" />
                                    <span className='ml-2'>Onetime</span>
                                </div>
                            </div>
                            <div className='ml-10 text-left'>
                                <p>Periodic</p>
                                <div className="flex items-center mt-5">
                                    <input type="radio" name="radio-5" class="radio radio-accent" />
                                    <span className='ml-2'>Monthly</span>
                                </div>
                            </div>
                        </div>
                        <div class="w-[200px] ">
                            <label class="label">
                                <span class="label-text">Pick the best</span>

                            </label>
                            <select name="" id="" className='w-full'>
                                <option value="" className='flex justify-center'>
                                    <p>Ma</p>
                                    <p>Ma</p>
                                    <p>Ma</p>
                                </option>
                            </select>
                        </div>

                    </div>
                    {/* 2.3 Section */}
                    <img src={img2} alt="" />
                </div>
            </div>
            {/* Second Section End */}

        </section >
    );
};

export default Schedule;