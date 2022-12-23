const Footer = () => {
  return ( 
  <div>
    <section className="contact-section bg-black" id="contact">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Github</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50"><a href="https://github.com/Mhd-a8203">https://github.com/Mhd-a8203</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50"><a href="#!">M.amini8203@outlook.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Linkedin</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50"><a href="https://www.linkedin.com/in/mohammad-amini-58a448246">Mohammad Amini</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </div>
  );
}
 
export default Footer;