
import SafeEnvironment from 'ui/components/feedBack/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
export default function Home() {
  return (
    <div>
      
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os Profissionais'}
        subtitle={' endereço Profissionais Localidade'}
        
      />
     
    </div>
  );
}
