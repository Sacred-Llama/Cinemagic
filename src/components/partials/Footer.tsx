import conf from "../../config";

export default function Footer(){
  return (
    <footer>
      <img src="/assets/logo1.png" alt="Logo" />

      <div className="links">
        {/* {
          conf.SITE_DISCORD &&
          <a href={conf.SITE_DISCORD} target="_blank">Discord</a>
        } */}

        {
          conf.SITE_CREDITS &&
          <a href="https://urlef.com/0J0h/22879904" target="_blank">🎨 by Cinemagic</a>
        }
      </div>

      <p className="disclaimer">&copy; {conf.SITE_TITLE}. We do not store any media.</p>
    </footer>
  )
}