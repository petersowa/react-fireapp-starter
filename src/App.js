import React from 'react';
import PropTypes from 'prop-types';

const Header = () => <header className="header">Page Title - Header</header>;
const Footer = () => <footer className="footer">Page Footer - Author</footer>;
const Main = ({ children }) => (
	<main className="main container">{children}</main>
);
Main.propTypes = {
	children: PropTypes.node.isRequired,
};

const Article = () => (
	<article className="article">
		<h1>Hello World.</h1>
		<hr></hr>
		<h2>The is a boiler plate react app</h2>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi odio
			fuga dolores odit, mollitia veniam voluptate quasi maxime doloremque
			tenetur? Unde molestiae asperiores reiciendis quaerat eos at
			aspernatur molestias totam.
		</p>
		<p>
			Vitae quia ipsam in modi omnis soluta perferendis unde, qui facilis
			ducimus, suscipit animi corporis quidem eveniet, rerum aliquam
			quibusdam vero sunt quae repellendus? Veniam autem quaerat nihil et
			nostrum?
		</p>
		<p>
			Amet officiis nulla excepturi sit necessitatibus illum quisquam
			architecto doloribus perspiciatis ut voluptatem voluptas, et magnam
			ab non deserunt. Voluptatem dolorem rerum error ipsum inventore a
			adipisci eum ea quod?
		</p>
		<img src="https://picsum.photos/200/300" alt="random" />
		<p>
			Saepe ipsam culpa a id sunt consequatur, rerum, consectetur dolorem
			natus minima minus autem explicabo tempore, assumenda dolor ipsum
			vitae quos voluptas? Enim quae tempore officiis nobis laudantium
			recusandae minima?
		</p>
	</article>
);

const Section = () => (
	<section className="content-section">
		<Article />
		<button className="comment-button">Comment</button>
	</section>
);

const Sidebar = () => (
	<aside className="sidebar">
		<nav>
			<ul>
				<li>App</li>
				<li>Profile</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	</aside>
);

const Layout = ({ children }) => <div className="layout">{children}</div>;

const App = () => {
	return (
		<div className="app-content">
			<Header></Header>
			<Layout>
				<Sidebar />
				<Main>
					<Section></Section>
					<Section></Section>
					<Section></Section>
				</Main>
			</Layout>
			<Footer></Footer>
		</div>
	);
};

export default App;
