import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;

    .section-header{
            height: 300px;
            width: 100%;
            display: flex;
            
            .index-content {
            display: flex;
            text-align: center;
            height: 200px;
            width: 100%;
            align-items: center;

            img{
                height: 100px;
                width: auto;
                margin: 15px;
            }
            h1 {
                text-align: center;
                font-family: 'Varela Round', sans-serif;
            }
        }
        }

   .section-products {
        height: 100vh;
        width: 100%;
        background: white;
        display: flex;
        margin: 20px;
        align-items: initial;

        .product-content {
            display: grid;
            text-align: center;
            height: 400px;
            width: 200px;
            background: #fff;
            border-radius: 12px;
            padding: 10px;
            margin: 10px;

        button{
            background: midnightblue;
            border: none;
            padding: 5px;
            color: #fff;
            margin-top: 10px;
            border-radius: 25px;
            font-family: 'Varela Round', sans-serif;
            width: 100%;
            font-size: 15px;
            font-weight: bold;
            box-sizing: border-box;
            cursor: pointer;
        }
        }
        
    }
`