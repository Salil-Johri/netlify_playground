import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
				<script dangerouslySetInnerHTML={{ __html:`
				  if (window.netlifyIdentity) {
						window.netlifyIdentity.on("init", user => {
							if (!user) {
								window.netlifyIdentity.on("login", () => {
									document.location.href = "/admin/";
								});
							}
						});
					}` }} />
      </Html>
    )
  }
}

export default MyDocument