import React from 'react';
import {PageTitleContainer,PageTitleStyles} from './styles';


interface PageTitleProps{
    title: string;
    subtitle?: string | JSX.Element;

}


const PageTitle: React.FC<PageTitleProps> = (props) => {
    
    return (
        <PageTitleContainer>
            <PageTitleStyles>{props.title}</PageTitleStyles>
            
            {props.subtitle}
        </PageTitleContainer>
    );
}

export default PageTitle;