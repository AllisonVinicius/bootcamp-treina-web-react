import SafeEnvironment from "ui/components/feedBack/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformations";
export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os Profissionais"}
        subtitle={" endereço Profissionais Localidade"}
      />
      <UserInformation
        name={"Allison Vinicius"}
        picture={"https://github.com/AllisonVinicius.png"}
        rating={3}
        description={"Corumba - Ms"}
      />
      <UserInformation
        name={" Vinicius"}
        picture={"https://github.com/AllisonVinicius.png"}
        rating={2}
        description={"Corumba - Ms"}
      />
    </div>
  );
}
