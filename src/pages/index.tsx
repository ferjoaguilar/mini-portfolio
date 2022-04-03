function HomePage() {
  return(
    <section className="container">
      <div className="card">
        <img 
          src="https://res.cloudinary.com/dohkdu219/image/upload/v1648956651/portfolio/profile_vykrt2.png" 
          alt="profile"
        />
        <h2>Fernando Aguilar</h2>
        <p>I'm NodeJS and Golang expert developer. I like to write code</p>
        <div className="links">
          <a href="https://www.facebook.com/fernando.rivas.566790/" target="_blank">
            <img 
              src="https://res.cloudinary.com/dohkdu219/image/upload/v1648958982/portfolio/facebook_kkrdbq.png" 
              alt="Facebook" 
            />
          </a>

          <a href="https://wa.me/50378478488" target="_blank">
            <img 
              src="https://res.cloudinary.com/dohkdu219/image/upload/v1648958982/portfolio/whatsapp_xfztme.png" 
              alt="Whatsapp" 
            />
          </a>

          <a href="https://www.instagram.com/fernando_rivas127/" target="_blank">
            <img 
              src="https://res.cloudinary.com/dohkdu219/image/upload/v1648958982/portfolio/instagram_qlg8tf.png" 
              alt="Instagram" 
            />
          </a>

          <p>ferrivas127@gmail.com</p>

        </div>
      </div>
    </section>
  ) 
}

export default HomePage