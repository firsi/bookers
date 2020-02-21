import { theme } from '../theme/theme';

const BookStatus = ({text, color, circleWidth, circleHeight, fontSize, onClick, disabled=true}) => {

    return(
        <div className='book-status' disabled={disabled} onClick={onClick}>
            <div className="circle"></div>
            <span>{text}</span>

            <style jsx>{`
                .book-status{
                    display: flex;
                    align-items: center;
                    background: transparent;
                    border: 0;
                }
                .circle{
                    display: inline-block;
                    margin-right: ${theme.spacing.small};
                    width: ${ circleWidth || '18px'};
                    height: ${circleHeight || '18px'};
                    border-radius: 50%;
                    background-color: ${color};
                }
                span{
                    color: ${theme.color.primary_dark};
                    line-height: 15px;
                    font-size: ${fontSize || theme.font.small};
                    
                }
            `}
            </style>
        </div>
    )
}

export default BookStatus;