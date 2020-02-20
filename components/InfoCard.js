import { theme } from '../theme/theme';

const InfoCard = ({title, content, inverse}) => {
    return (
        <div>
            <span className="title">{title}</span>
            <span className="content">{content}</span>
            <style jsx>{`
                div{
                    display: flex;
                    flex-direction: ${inverse ? 'column-reverse' : 'column'};

                    justify-content: space-between;
                    margin-bottom: 1em;
                }
                span{
                    display: block;
                }
                .title{
                    color: grey;
                    margin-bottom: 0.5em;
                    font-size: 0.9em;
                }
                .content{
                    color: ${theme.color.primary_dark};
                    font-weight: 700;
                    font-size: 1.2em;
                }
            `}
            </style>
        </div>
    )
}

export default InfoCard;