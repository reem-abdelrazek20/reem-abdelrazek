import "../styles/project.css"
import Card from "./card";

export default function Project() {
  return (
    <section className="project-section" id="projects">
      <h2 className="section-header">My Projects</h2>

      <div className="project-grid">
        <Card
          title=" calculato App"
          copy="تطبيق آلة حاسبة بسيط ومتجاوب تم تطويره باستخدام 
          HTML وCSS وJavaScript  لتنفيذ العمليات الحسابية الأساسية بواجهة سهلة الاستخدام."
          backgroundImage="/img/calculator.png"
          linkgit="https://github.com/reem-abdelrazek20/calculator.git"
          link="https://calculator-sigma-seven-31.vercel.app/"
        />
        
        <Card
          title="advice App"
          copy="تطبيق لعرض نصائح عشوائية باستخدام API بواجهة عصرية ومتجاوبة."
          backgroundImage="/img/advice.png"
          linkgit="https://github.com/reem-abdelrazek20/Advice-generator-app.git"
          link="https://advice-generator-app-eight-chi.vercel.app/"
        />
         <Card
  title="Countries App"
  backgroundImage="/img/countries.png"
  linkgit="https://github.com/reem-abdelrazek20/countries-app.git"
  link="https://countries-app-topaz-theta.vercel.app/"
  copy="تطبيق لعرض معلومات الدول باستخدام REST Countries API مع البحث والفلترة وتغيير الثيم باستخدام React."
/>
        <Card
          title="Shorter Links App"
          copy="تطبيق بسيط لتقصير الروابط باستخدام React و useState."
          backgroundImage="/img/link.jpeg"
          link="https://link-shortener-black-kappa.vercel.app/"
          linkgit="https://github.com/reem-abdelrazek20/Link-Shortener-"
        />
        <Card
          title="web page"
          copy="صفحة ويب ب html css js "
          backgroundImage="/img/web.jpg"
          link="https://web-bage.vercel.app/"
          linkgit="https://github.com/reem-abdelrazek20/web-bage.git"

        />
   
        <Card
          title="Mortgage-Calculator App"
          copy="تطبيق لحساب الفائدة ."
          backgroundImage="/img/card1.jpg"
          link="https://mortgage-repayment-calculator-pi-one.vercel.app/"
          linkgit="https://github.com/reem-abdelrazek20/Mortgage--repayment-calculator"
        />
         <Card
          title="Platinum Global Motors"
          copy="صفحة هبوط  ."
          backgroundImage="/img/card2.jpg"
          link="https://car-zeta-three.vercel.app/"
          linkgit="https://github.com/reem-abdelrazek20/car"
        />
            <Card
          title="تحدي العلوم"
          backgroundImage="/img/card.jpg"
          linkgit="https://github.com/reem-abdelrazek20/scince"
          link="https://scince-phi.vercel.app/"
           copy="HTML, CSS, JavaScript، لعبة أسئلة علمية تفاعلية مبنية باستخدام ة."
        />
            <Card
          title="TO DO"
          backgroundImage="/img/card3.jpg"
          linkgit="https://github.com/reem-abdelrazek20/to-do"
          link="https://to-do-kappa-ochre.vercel.app/"
           copy="قائمة مهام تفاعلية   لإضافة وحذف وتعديل المهام
           HTML وCSS وJavaScript"
        />
      </div>
    </section>
  );
}





