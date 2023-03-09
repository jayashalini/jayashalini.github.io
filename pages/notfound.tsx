import React from 'react';
import Link from 'next/link';
import Head from 'next/head'

const PageNotFound = () => (
<div className="not-found">
	<Head>
	<meta name="description" content="The content you are looking for cannot be found." />
	</Head>
	<h1 data-testid="heading">Page Not Found</h1>
	<p>Return <Link href="/">home</Link>.</p>
</div>
);

export default PageNotFound;
