import React from 'react';
import {PageTitleContainer,PageTitleStyles,PageSubTitle} from './styles';


interface PageTitleProps{
    title: string;
    subtitle?: string | JSX.Element;

}


const PageTitle: React.FC<PageTitleProps> = (props) => {
    
    return (
        <PageTitleContainer>
            <PageTitleStyles>{props.title}</PageTitleStyles>
            
            <PageSubTitle> {props.subtitle} </PageSubTitle>
        </PageTitleContainer>
    );
}

export default PageTitle;