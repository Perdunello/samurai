const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: 'Nikita',
            avaUrl: "https://www.thefaceparismanagement.com/uploads/images/products/1234.jpg"
        },
        {
            id: 2,
            name: 'Sanya',
            avaUrl: "https://www.faceapp.com/static/img/content/compare/beard-example-before@3x.jpg"
        },
        {id: 3, name: 'Danik', avaUrl: "https://vistapointe.net/images/face-2.jpg"},
        {
            id: 4,
            name: 'Andrey',
            avaUrl: "https://www.meme-arsenal.com/memes/1649f6d266b783b18f81b033c87a99b6.jpg"
        },
        {
            id: 5, name: 'Artem',
            avaUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/face-wash-gettyimages-489974588-1557345669.jpg"
        },
        {
            id: 6, name: 'Bratello',
            avaUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFhYYGBgaHBoYGBoYGhgaGhkaHBoaGRgaGhgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQhISExNDQ0MTQ0NDQ0NDQ0MTQxNDQ0NDQ0NDQxMTQ0NDQ0NDQ0NDQ0NDQ0NDQ/NDQ/MTE/Mf/AABEIAREAuAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABBEAACAQIEAwUFBgMHAwUAAAABAgADEQQSITEFQVEGImGBkRNScaGxBxQyQtHwYrLhIzM0cnPB8RVjoiRTgpLD/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAeEQEBAAMBAAMBAQAAAAAAAAAAAQIRIRIDMUETUf/aAAwDAQACEQMRAD8Atwto8m8e6X2kA0nPVjsGbmGugMBwQ13h2IIA3jVAtRrRqoWkaXY6w9bKJNVDFpgC0BxFLWWaNeVvFMWlIZnYKOXU/Ac4QVPSorl8YLiEVRckAeJsPnMrj+1TnSkMo946t+glHVxbubsxPiSZpMKj03acYoJoXB/y6xj9pqXJW+QmEBP7MmQyvET6rXv2gU6ZT6/0g3/U0J5iZ9XvJAvOHiF6q4eqrfmPpHUKaX1YW85Tm/lJEP7/AKQvxyiZVonwlIrobk3JsdpQ4JCGbwMkpORzMKTFe9Y/G1/WKfFr6qrntZ4LGm1jCmqA6ynw9ie6fI/rzlpRS41kXHX2N7E0awhDsLQA0iNovbG1jFo9huJLdTFIcWCQYpekrtFg2IS0LIIMhrnWSqoqGa8LqIx3jsNThNanpFTkR4an1kpGs5ROkH4rjloUmqNy2HVjsPWL7V9KvjvG1wwyr3nOw5AdWnn2Pxz1WLuxY+P0HQSPH4xqjs7G5Y3P76SCmJtjjIztTIkmRYxRyEmWWRyrCFSNUDaSC0cSaq66QhADIgsnpCAPVB0jwI5REI4RjJOskeVnCIwYjkGX3C8YG7reX6GUTrO0nKnTrJyx2JdNoVFoFWUGT4SsKiBufP4yN6JvOf6aXqNsPdIoeiHLOQ6EK1yeUa5uRoZrWoU+gjlwiHlL8ltnMMCIVUMsMTgsuo2g1RLyLNNMUdFRMT9oGMu6URsozt8ToB6fWbRGtPMO1FfPiardGyjy0/2hhOjJnnOtpKgjWXwkqLN2dTIJKokYPOTIIBPTH7vJbXkStCEgl1Ek6jSct6fvSPjIliIjv3+/lHBYw4NtorR6icCxhG6RoHOTkSMiAXHZ3EasnmJd2F5lOGPaovibes0eQgzDOdXjeDzbLFAmrECKZ6qtxqK+GuNI7C0iok3tFPOPQzct/hym4lZi6eU35GW1oFxFO4T0k5TgnFXUS88gx7Znc9WY+pnr6VO6T0B+k8ZrPrfrJwVUDmOSRsZMjaTVFTqOUlQSJGsLmcOJFoEMRZOhlamK6whMWtt4EsFaSKZVPj+kemPPMRlpaKY4GBJjBJ0xHW0YEWnWEiFYSQODGDROv1nSLxggHaejA+ImupteZAEaTVYN+4p8BMvkVidiadgYo+obgxTJS1p4dxt1lxhxoI2dWoBvNdSDexDmVvFatkMkrYxBqzqo6sQPrM3xrj9E9wVUPWzA/SLYTq/9k5/hb6GeP1Rcz0//AKpQ9k4FRLlGH4hr3TPMKjiGEO1G8cKn/MDr4joCYHUrM2/oNppISxbFA89B+7yI1lOl/SArOx6IcMSJ0YkQOOUw0FglW8nRj1lclQjlJxWaGiH5vjODEEbfOAvVcyB8x6mGhpbjiJG9pPS44mzfLWZ002P5T6Tq4dz+U+cY1GspcZpHZj6GSNxFTtrMmmEfqBDcPg25ufLSItRepjRfY/Ka3hTg0lbMLajU25+MxVDD23ufGEZBbfSLLG0S6a2vxKkm9RPW/wBIpkmooecUj+Z+mjXtZWYhVW5OgAlP2g7UV0Y089nGjlTfKfdB6yo4dxNqVJ6qi7sciHkml2b46gD1lA4JJJOvPnK87OJ8Rjmc3Zix6sST85B7cRrU4w049aMQtcSRcUsDFGd9lGVHDGJ0nHr0zyEB9hHrhvjGWhy1aVthHq9PwgAwoI/NHpgx1MWz0sB7Pw+UlSnTPT5SuThxPMwqlwgnQZvKK5DyJNOn4ThdB0iTgjbd4mOHBjcjKbjfWL1D8VGaqeHyiFZfCSng7D8kmpcEc6BIe4Xmgmqr1izgw88EcbpGnAMvKHoeaERSdhJqdM87SX7s/JT5GBVXymzd0+OkfqDQ/lq4HnOBkH5iZXCoOokqtD0XkclQX0HnFIqWkUN0tL3iHZgpglZQboxdupDAAnysJiKlKxn0LQwgCZCL6WN5452p4O2GrMoHcOqHkV5eY2i2qMwRGXhTBT4SGoJRmoZIF/5MFepbaRZid9YAarr8fh/Wd9qfyp6wzhOBDKWY7nblp/zNNwrBGoclNU0sCxFwPLnM7l09M/hcA76lgssqHDiu5BN9+U29PsklgKmJCsfyqqgeGm8r+KdmGw4zHv0z+dLj1Aiuxyg+F000VsvS9pq+FcMsSxUdRtMU6ezIdWzKdr7zZcC4urJbnYC0xy/1vj/hU+FsSGCga3+c5X4K13ew1N5oMHqokmJOhHWTrm1W908x4m1VTlFtPX1gaYirsWPz+s3bcNVzoPiTAcTwJCwVBdr2NzcX8JWOUTljWWDv1bx8ZKlJt72+INpsKPY+oB/fAHplvBcdwzEUAWdEqJzZBqviQZfdMuW/ajoNlbKdT8P3cQPjmAWojNlsQQPh4y8GCRznQ6dDuOonMZgCtJ9P6/CTMl+Xk1dCGOXa+kKwztrvoLkHe3vDqBLGhw7v63Gt79NbywKpmAy3sbg89dD5ETbbLXQWGcGKT4TAlTbf6fKclIv293MrOJ8EpYhClQXB2I3U9VMmTiKEDvCSrikPOI9vGu1PZOthWLFc9MnuuoNvAH3T4TJVQZ9NFkdSjAMpFiCAQR4iebdsuwKgNWw2g3amTt1KH/aOUnk9pJRXX4yStQZSQRtCcJhrOl+dj66x2nI0PDMGVTLztcy67Kv7NiPeN5FhlkyVPZsdLg2t1B6zD11rMdzSxxftj+FkD5ruXJDL3wcy8mBUW1uNfCa4n/0lQsCEIYoGNyFsANbc2uR8RKfC8eSwLorW2JUaeu0ruP8AaNq1kS+Xn4+krL5JZwsfisvWbqYR2sQQSx25g8j59YTw4vTex3B1hFHEBCLAE8z06xlNi73tqT8pjbudb83xvOGVyVHS0Irtm2ldhVyraTrUOhky8Xce7A1BVU5R3bmwPW/ST4FCrhSdRoSNdeZvDcS6MVDDl3ekFpVwjEtf6g/pDWqJdxfYirlQnmBMlhOJO7nMCO9kKkNYgvlAudGuveuNppqeNRhrz32tK2vSpKcyAs2trsWtfoOXxnR7x04/55XJS4DBFXY8idLekPqYa5IPMbQ/DYew8bx1QW/pMHRa854xTyVHVevL5wXAIiPmrK5Qb5QD5/KW3G6X9sSdmBHW/wC9Jf8ADMIj0gCgJ1F/l66S7lxGOMuSChw7DV1FTDsCBuLW9VijeFcOFOqWTQZradOd4opndNcvgm/tAm+8JpseRM2lLAIBYKI98KmXLlFvgJ0OLSlw98u5lXxcvlIubTSNhLHTaVPGqZCFhrbcRfR64814tgAwJy69ecq69LL7PqAPl+xNpUou42mf4tgyg7wtvlPxB0iuUqsZZ9iMHU2h+Ip5103+sz/Da9xbppLqjWmOW5W+GrOgqgYaaxiI52BHjL1WBHj1kbDXwkbaeAFOmVFtzzlv2foh315AW9YBWln2X0q/KO/RY/bTsumgkdFpZZO6x5ysRdzJs0uZbS1aWdSt7Eaqehgi1WHddCCNL20lpSWPKR6LeqraSqdrQ+lSA13MeuGG8lWw0jmKMsnNhA61bf1kuJfQykxVffW2lvM6CGy1zal4lZ6u9hcAHeXqYj2dLKurtonxOl4BwPCq7MWBIVLr/mN9/SGOy0TncguRZV9xeseUtskGFxxltFqRTTINXI18IpXcH4khc5/nFNZjJGOWeVu22pVLiPDyMCPvLiKB4jjMllUXdtFH1J6AQPij5KBzG5It8Sek5xbFIjBmOoFh1me4hxI1SptoDoP3zmWVbYY26LBliQtuUdxnhYqpkbwKnoRtClxSqo0sw8IK/ECzC4mW5HXMLl+PP3wT4esyOLHfwI6iWVN5edpKaOuewzKNDz5X+Uz1A8prv1HLcbherXDteTsIJh4cRoBMcvtvjeAqg1mi7PYUqQ3WUFWn3svjNzwqkoRT4R/5Ez9o2q3ctAlYQ6svdMrkQkwy+xj9C6D6wkrBKdO+l9YTQe+h3jxTkcDIXe0mqQHEPKpRBiahmX45iCoUe8SfTb5zQ1DfSUPaHKmV2NxchRyFgNfUiLGdLO8B4ftA1BMiCzE6sd9eg/WSYFDVa7MSTqSZnEdS9zuTf1l9g2ym4mupGHcuNPg+BJzN4oBgsY+YG+kUW4v+Vbm86YGmKBky1ZpWWzX4dTc3dAx8dYhw+mv4UUHwAkvtRAeI8ap0VLOw9YrjFTK/6rMfURCc4A6SiGJRnBGxMquI8f8AvDsx0X8o8JVDiBD93lMM8Zrjs+HKzK7b3i3DlamxFr5SflcTBjQgy2PG3K2lOIYl80s1bdrDDakDmZZUKLNsRpKrCamX2HqZV+smpxBYtCpvzvpL7hHEgyhb2PSU2PqBl0H7EfwSkGJv5GGlS91GpfGaZbziuT+HnzlclFVcE3N9NZciwG0Z/UOoJbU6mSnrIfagDeMavcaG0W0atTVHgDvdpO2toMjam8Z+TXGsxvb+pZaYv7xPjqP0mzO8837f1s+JCDZFVT8T3j/NLwnWfycjPU8XZrzVcNxGdRKbD4FMmu8dhmKNZdrzdz7brAsdBaKc4GwfLcxSPMV/ShqHa5B19IUO2qdG9J5uMWnWd++oOc1ZabTifal3FkJWZzFV3fV2J85XHHL1jfvqdYtKl0Jvadp1bHaC/fU6xpxaReIr3VwmNHSOWuGOkp0rrCKdcCK4Qe7+tTwZQTeEY5wTlGniDKbAYrLtDadS5J6znuOq6ccuJEovYgPcdG1+cI4bXek+qXHO07hqliARLinTTU6G45ybWuOMTpj6ZGYhgeltY5uKFjoh89J2k1O1yg+egljQpJa4AEnq7qK/Dmq+9lHW1yfWSNQKnVifj/xDmcbSNiOcekWu5u5fpAqDEknle0dia1lsI2mMqhR+I/UxyIuQrCUS725XufAf1nmXbOmtHGV1a/4s4vqcrgMPrbyntGAwvs1tzOrfpPHvtZcHGm26oit8bE/QrOnDHTlzy3WeTiCE2DGGI53mVYy74JxYIwVxdOvNf6TTSF5Sx9Rfw3EU1eB4NTqIHRgynYiKTuF15CGEWYRwwx6Tow56TQzC4jS0nGHMTYYwAfNFmkhw5i+7npAHU8RaEri/CDrh7b6CQVHGwgGk4NXzh7fkyk/5ScpPkSo/+Ql7hGuQJleyj2xKKdQ5NNh1DjL9SD5TVVsM9CoUfQrseRHIiYZzrXGrxMPcXEMpowFrGAYDG6Abbf1mkwwuL/Sc9jpxvAVNDtYwmkGELRLGTEGHlXoOBbWMeTOYHisQFFoSaTbtFXcXA3N5d8IwRv7R9/yj99JV8Fw4eqb65RdvDot+pmt2muGP6w+TL8RYrEJTRnc2VFLMT0AuZ859ouJNiK1Ss29Ri1ug2UeQAE9D+1HtECPuiNsQ1YjqNVTy3PlPJsQ9zN8YxQOZwNacYxt5Wg1vZDtQ2GfK92pt+IdP4hFMkHii1A0iqDO5BKenjiIR99J5R6SsQojgolWMU3Sd++GGgsXUQatVVBc+kFfiMralUsbkx6AjE4svoNB0/WQLGgxyxU152XIGJw5/7tP+dZ7z2g7PpiV91xco3j0bqpngXZ5rYiif+5T/AJxPppjrM8p05Xi6F6TsrKQyHKwPIzVcPxoy6G4tLjtXwYuPb0h/aoO8P/cTmp8Ry9Okx9Ao+qi3UbWmOU1XT8eW5xok4gLydseLSqw+CQi7Mw8cwt84FxDFIoy0zmb3m1A+A5n5TJpd/q0xfFERSSwA6mVXD6tbFv8A2SlUGntCOXMjp9YLwDsz95qZ6hZkU3cn8x9xenj0E9KpUlRQiKFUbACwE1xxZZZa4XCsEtFAi+Z5sTuT4yh7cdrFwaZEINdx3Rp3AfzsPoOc72w7Vpgkyrlesw7qX/CD+d7fIc54nxLHvWZndy7sbsSd5tjOMLehsZii5JJJJJJJ3JO5MBYyR2kLCaQjTOGImcvGCvFORQCw9iITSKAa2ErKmKJ20EhvAtLati0GgF5X1axbw8BIJ2AdvOXnIoGdHLGgxywCz4VVC1Ebo6n0YGfTi1FbVWBB1FiD9J8robTS4TCmpg2dB36Lm9t/ZuLkn4G/rJygfQ2U9DPOe2nB3wz/AHqkpNNz/aoL9xvfA90n0PgdPNuGcYqUXV1Y6ciSQRzBE9c7P8eTEIGRrbZlbXKfdYcxIuOzmXmskcUHF7nz39IbwvhNSsVyqwQnVyO6BzseflPSkxFwCbf/AGB9I5HBOoN/GZ/zjT+1oTCYZaaKiCygeZ6knqZFxPHLQpPWcgZEZhcgZmCkqovuSbC0i7SdoaODp531c/gQbsfE8h4zw3jnGHxFV6rm5Y6AXso2AUchaaTFnbsJj8Y9R2d2LOxJYnmYCTJGmx7JdllZGxOJFqagsinTP4t/D4c/hLTVFT4M1PD/AHqqLKxy0VO7t7xHuC1/HSULGaDtbx04mooB/s6ahKY2Fhu1uVz8rTONHAY8ZHvIzGbt4pyKBOiKcivAOxTl4rwN2KcvEIA6OUxkcsAmQz0b7KUzNWUi65VJB23YTzenPQvspr2r1E96mf8AxYfrFkQPtd2ZbDualME0m165CeR/h6GZ/BY6pRcPTdkbqPoRzHhPfXwqslmA25i4PgRzmR7V9j8P93q1kQU3RC4yEgNl7xuhNgSL7SdiMjQ7dYkOrNkYqrhboosWXLm03I38oTQ+0PGKAL0zYAAlNdOtiJijpHKY9HBmOxz1nZ3YszEkkknc3sLnboIOiEmwBJ6DebTsb2HfE5atW6Ub6cnqAaHL0H8RnqmE4bQw6ItOkihBZTlXP0vntck9Yth5z2T7BFgtXEiwPeWnzA0IZ/j7vrJftM4wKaLhKZsSAz25L+VfPf4W6za8c4wmGpPVfXKL5ebMdET1+QJngXFMa9ao9Rzd3JZj4n/blCECdpETOuY0mWbjRk6xnIFSinIoE7FFFAFFFFAyiiEUDdnbxt50QCVDNb2ArFcWlvzBlPwKn9JkUM0vYnEKmMoliAuaxJ2AII19YqT3Iue6o/G23RVG7H5eZEi4uyphq5J0FKpcsd7oRqfG/wA5LgTcGod6liPBB+Aene8/CZX7SuJImENK/fqsoABGioQzFhzGgHx+Eg3j77yx4Bgfb10Q7MwzeCjVvlKtmmm+z7GLTxtLN+FyUN/4wQv/AJZZRPcaNdFRVTRVAVQNgALAfKRNVzG/IfWKoijbSZPt1x0YbD5ENnqXVeqr+d/Q2HifCSGE7d8fOIrMinuU2NrbFtiflb16zHO0kqPeQMZcgcYxpMRMaTGZGcivOXgVKKKKBFFFFAOzkUUDdEUUUDKdEUUAcsseF/3ifGKKKk+guE/3FL/TT+Wea/at/iaX+l/+jxRSDrz+WPAv8RS/1Kf84iilUn0DUnk/2pf4hP8ATH8zxRSYGCaRmKKaAwxpiigbhiiigVcMUUUCf//Z'
        }
    ],
    messagesData: [
        {id: 1, message: 'Lorem.'},
        {id: 2, message: 'Lorem ipsum.'},
        {id: 3, message: 'Lorem ipsum dolor.'},
        {id: 4, message: 'Lorem ipsum dolor. HAHA'},
        {id: 5, message: 'Lorem ipsum BUBU'},
    ],
    newMessageText: '',
}
let dialogsReducer = (state = initialState, action) => {
    if (action.type === SEND_MESSAGE) {
        let text = state.newMessageText
        return {
            ...state,
            messagesData: [...state.messagesData, {id: 5, message: text}],
            newMessageText: '',
        }
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        return {
            ...state,
            newMessageText: action.textMessage,
        }
    } else return state
}
export const sendMessage = () => {
    return {type: SEND_MESSAGE}
}
export const updateNewMessageText = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, textMessage: text}
}
export default dialogsReducer
