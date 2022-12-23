const About = () => {
  return ( 
  <div>
        <section className="about-section text-center" id="about">
            <div className="container px-4 px-lg-5">
                <div className="freelancer row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="text-white mb-4 bg-gray-900/30 rounded-[20px]">What is Freelancer DApp</h2>
                        <p className="text-white  text-lg text-[17px] bg-gray-900/40 rounded-[20px]">
                            This DApp provides the connection between the freelancer and the employer, and pays the salary to the freelancer with the money streaming method.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="projects-section bg-light" id="projects">
            <div className="container px-4 px-lg-5">
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src="src\components\assets\img\time.jpg" alt="..." /></div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>What is Money streaming method</h4>
                            <p className="text-black-50 mb-0">Money streaming is pretty much exactly what it sounds like: money transferred every second in a flowing “stream.”</p>
                        </div>
                    </div>
                </div>
                <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div className="col-lg-6"><img className="img-fluid" src="src\components\assets\img\Handd.png" alt="..." /></div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">How it works</h4>
                                    <p className="mb-0 text-white-50">In this DApp, smart contract is the intermediary between the employer and the freelancer. The employer sends the agreed money with the freelancer to the smart contract on the blockchain, and can set the smart contract to pay the freelancer money with the money streaming method.</p>
                                    <hr className="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-0 justify-content-center">
                    <div className="col-lg-6"><img className="img-fluid" src="src\components\assets\img\Block.jpg" alt="..." /></div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">Blockchain Tchnology</h4>
                                    <p className="mb-0 text-white-50">
                                        Blockchain technology is a decentralized, distributed ledger that stores the record of ownership of digital assets. Any data stored on blockchain is unable to be modified, making the technology a legitimate disruptor for industries like payments, cybersecurity and healthcare. Discover more on what it is, how it's used and its history.</p>
                                    <hr className="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </div> 
  );
}
 
export default About;