# Website using Flexbox 

## A simple [website](https://iridescent-lemon.github.io/flexbox-website) created to demonstrate some of the features of flexbox. Currently in development.

### [Click Here for Live Preview](https://iridescent-lemon.github.io/flexbox-website)

<br>

# What I've Learned So Far

- ✅ Enabling flex and determining its flex direction.
    -    
    ```css
        header {
        display: flex;
        flex-direction: row;
        }
    ```
    
- ✅ Justify-content and align-items
    -
    ```css
        header {
            justify-content: flex-start;
            align-items: center;
        }
    ```

- ✅ Align-self and flex-wrap
    -
    ```css
        header {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
        div {
           align-self: center; 
        }
    ```
- ✅ Flex sizing properties
    -
    ```css
        div {
            flex-basis: 400px;
            flex-grow: 2;
            flex-shrink: 1;

            /*or using the shorthand method*/
            flex: 2 1 400px;
        } 
    ```

- ✅ Justify Content and Flex shorthand.
