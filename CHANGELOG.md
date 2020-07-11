### Versions

### [0.1.0](#0.1.0)
#### Breaking changes
 - change usage of component
     - use properties (header footer nav) instead of <div> with attribute id
```javascript
		import LayoutHNCBF from '@ReactSeam/layout';
						export const foo = () =>
						{
								return (
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
								)
			}
```
change to:

```javascript

			import LayoutHNCBF from '@ReactSeam/layout';
                export const foo = () =>
                {
                    return (
							<LayoutNCHBFDemo header={<h5>Header</h5>}
                        		nav={
                        			<ul>
                        				<li>link1</li>
                        				<li>link2</li>
                        				<li>link3</li>
                        				<li>link4</li>
                        			</ul>
                        		}
                        		footer={<h5>Footer</h5>}
                        		bodyMinWidth={50} navMinWidth={5} navWidth={15} isPercentage={true}>
                        			test
							</LayoutNCHBFDemo >
                    )
    			}
  ```
- change documentation
