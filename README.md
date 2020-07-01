
## Layout


### Installation
to install layout component use this command:
    
        npm i @ReactSeam/layout
### Usage
There are two types of Layout 

![alt text](LayoutHNCBF.JPG)
![alt text](LayoutNCHBF.JPG)

you can choose between them

<b>example</b>:

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
