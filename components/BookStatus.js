import { theme } from '../theme/theme';

const BookStatus = ({text, color}) => {

    return(
        <div className='book-status'>
            <div className="circle"></div>
            <span>{text}</span>

            <style jsx>{`
                .book-status{
                    display: flex;
                    align-items: center;
                }
                .circle{
                    display: inline-block;
                    margin-right: ${theme.spacing.small};
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background-color: ${color};
                }
                span{
                    color: ${theme.color.primary_dark};
                    line-height: 15px;
                    font-size: ${theme.font.small};
                    
                }
            `}
            </style>
        </div>
    )
}

export default BookStatus;