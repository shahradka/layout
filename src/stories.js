import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import LayoutNCHBFDemo from './LayoutNCHBFDemo';

// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area
const table = 					<table border="1">
					<thead>
					<tr>
						<th>
							عنوان
						</th>
						<th>
							عنوان
						</th>
						<th>
							عنوان
						</th>
						<th>
							عنوان
						</th>
					</tr>
					</thead>
						<tbody>
							<tr>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
							</tr>
							<tr>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
							</tr>
							<tr>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
							</tr>
							<tr>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
							</tr>
							<tr>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
							</tr>
							<tr>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
							</tr>
							<tr>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
							</tr>
							<tr>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
							</tr>
							<tr>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
							</tr>
							<tr>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
							</tr>
							<tr>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
								<td>
									مقدار
								</td>
							</tr>
							<tr>
							<td>
								مقدار
							</td>
							<td>
								مقدار
							</td>
							<td>
								مقدار
							</td>
							<td>
								مقدار
							</td>
						</tr>
						<tr>
							<td>
								مقدار
							</td>
							<td>
								مقدار
							</td>
							<td>
								مقدار
							</td>
							<td>
								مقدار
							</td>
						</tr>
						<tr>
							<td>
								مقدار
							</td>
							<td>
								مقدار
							</td>
							<td>
								مقدار
							</td>
							<td>
								مقدار
							</td>
						</tr>
						<tr>
							<td>
								مقدار
							</td>
							<td>
								مقدار
							</td>
							<td>
								مقدار
							</td>
							<td>
								مقدار
							</td>
						</tr>
						</tbody>
					</table>
storiesOf('LayoutNCHBF')
	.add('base', () => (
		<LayoutNCHBFDemo bodyMinWidth={50} navMinWidth={5} navWidth={15} isPercentage={true}>
			<div key="header">
				<h5>Header</h5>
			</div>
			<div key="navigation">
				<a>link1</a>
				<a>link2</a>
				<a>link3</a>
				<a>link4</a>
			</div>
			<div key="body">
				{table}
			</div>
			<div key="footer">
				<h5>Footer</h5>
			</div>
		</LayoutNCHBFDemo>
	))
	.add('narrow', () => (
		<LayoutNCHBFDemo bodyMinWidth={85} navMinWidth={0} navWidth={5} isPercentage={true}>
			<div key="header">
				<h5>Header</h5>
			</div>
			<div key="navigation">
				<a>link1</a>
				<a>link2</a>
				<a>link3</a>
				<a>link4</a>
			</div>
			<div key="body">
				{table}
			</div>
			<div key="footer">
				<h5>Footer</h5>
			</div>
		</LayoutNCHBFDemo>
	))
	.add('expanded', () => (
		<LayoutNCHBFDemo bodyMinWidth={50} navMinWidth={30} navWidth={50} isPercentage={true}>
			<div key="header">
				<h5>Header</h5>
			</div>
			<div key="navigation">
				<a>link1</a>
				<a>link2</a>
				<a>link3</a>
				<a>link4</a>
			</div>
			<div key="body">
				{table}
			</div>
			<div key="footer">
				<h5>Footer</h5>
			</div>
		</LayoutNCHBFDemo>
	));
