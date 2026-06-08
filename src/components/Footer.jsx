import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-copy">© {year} Product Catalog. All rights reserved.</p>
        {/*<p className="footer-note">A subtle dark footer with minimal styling to keep the page calm and balanced.</p>*/}
      </div>
    </footer>
  )
}

export default Footer
