import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SectionHeading } from './ui/SectionComponents';

export type ProductConcept = 'simlab' | 'compute';
type Language = 'tr' | 'en';

interface ConceptCopy {
  name: string;
  label: string;
  title: string;
  subtitle: string;
  pain: string;
  image: string;
  alt: string;
  metaTitle: string;
  metaDescription: string;
  primaryCta: string;
  contactCta: string;
  demoNotice: string;
  storyEyebrow: string;
  storyTitle: string;
  storySubtitle: string;
  storyParagraphs: string[];
  storyPullQuote: string;
  storyStepsEyebrow: string;
  storySteps: { title: string; description: string }[];
  storyOutcomeTitle: string;
  storyOutcomeDescription: string;
  storyScopeNote: string;
  workbenchEyebrow: string;
  workbenchTitle: string;
  workbenchSubtitle: string;
  options: string[];
  optionLabel: string;
  runCta: string;
  resetCta: string;
  resultIdle: string;
  resultDone: string;
  resultDetail: string;
  featuresTitle: string;
  features: { title: string; description: string }[];
  limitsTitle: string;
  limits: string[];
  closingTitle: string;
  closingText: string;
}

const copy: Record<Language, Record<ProductConcept, ConceptCopy>> = {
  tr: {
    simlab: {
      name: 'Queva SimLab',
      label: 'Ürün Konsepti · Dijital Simülasyon Çalışma Alanı',
      title: 'Simülasyon işini tekrarlanabilir bir çalışma alanına dönüştürün.',
      subtitle: 'Konteyner şablonları, deney bağlamı ve ortak çalışma pratiklerini tek bir ürün yönünde buluşturmayı değerlendiriyoruz.',
      pain: 'Dağınık notlar, elle kurulan ortamlar ve kişisel makinelerde kalan koşumlar; araştırmanın tekrarını, incelemesini ve devrini zorlaştırır.',
      image: '/simlab-workspace-concept.png',
      alt: 'Konteyner tabanlı simülasyon çalışma alanını anlatan soyut Queva SimLab görseli',
      metaTitle: 'Queva SimLab Ürün Konsepti | Tekrarlanabilir Simülasyon Çalışma Alanı',
      metaDescription: 'Queva SimLab, konteyner tabanlı deney şablonları ve tekrarlanabilir simülasyon koşumları için ürün konseptidir. Canlı hizmet değildir.',
      primaryCta: 'Gösterim senaryosunu aç',
      contactCta: 'İhtiyacınızı konuşalım',
      demoNotice: 'Bu arayüz etkileşimli bir ürün gösterimidir. Gerçek bir çalışma alanı oluşturmaz, konteyner başlatmaz ve herhangi bir veri ya da hesaplama kaynağına bağlanmaz.',
      storyEyebrow: 'Bir Deneyin Yolculuğu',
      storyTitle: 'Araştırma, onu kuran kişinin bilgisayarına mahkûm kalmamalı.',
      storySubtitle: 'Bir simülasyonun asıl değeri yalnızca bugün çalışması değil; yarın başka bir ekip tarafından da anlaşılabilmesidir.',
      storyParagraphs: [
        'Bir araştırma ya da mühendislik ekibi için ilk koşum genellikle heyecan vericidir. Model çalışır, sonuç alınır ve herkes bir sonraki adıma geçer. Fakat günler sonra aynı deneyi yeniden çalıştırmak gerektiğinde; hangi kütüphanenin kullanıldığı, hangi ayarın değiştirildiği ve verinin hangi sürümünün işlendiği tek tek aranır.',
        'Dosyalar kişisel klasörlere, notlar mesajlaşma uygulamalarına, ortam ayarları ise bir kişinin hafızasına dağılırsa ekip aslında bir simülasyon değil, bir hatırlama problemi yönetmeye başlar. Bir kişi izinli olduğunda, bir bilgisayar değiştiğinde veya kurum içi ağ sınırı değiştiğinde bilgi akışı kesilir.',
        'Queva SimLab fikri burada başlar. Amaç yalnızca “Docker çalıştırmak” değildir. Amaç; deney şablonunu, veri ve ayar bağlamını ve çalışma akışını, ekibin ortak konuşabildiği bir çalışma alanına dönüştürmektir.',
        'Her kurum aynı altyapıya sahip değildir. Bazı ekipler kurum içindeki kapalı ağda kalmak ister; bazıları kontrollü bulut kaynaklarına bağlanmak ister; bazıları mevcut kimlik, veri ve iş planlama sistemleriyle uçtan uca çalışmak zorundadır. Bu nedenle ürün yönü, tek tip bir dağıtım dayatmak yerine kuruma göre şekillenebilen bir çalışma modeli olarak düşünülür.',
        'Böyle bir yaklaşımın hedefi, “bir kez çalıştı” sonucunu “anlaşılabilir, devredilebilir ve yeniden koşulabilir bir araştırma varlığına” dönüştürmektir.',
      ],
      storyPullQuote: 'Bir simülasyon yalnızca bir sonuç üretmez. Doğru kurulduğunda, o sonuca yeniden giden yolu da saklar.',
      storyStepsEyebrow: 'Sistem Değil, Ortak Çalışma Hafızası',
      storySteps: [
        { title: 'Deney nerede yaşayacak?', description: 'Konteyner şablonu ve izole çalışma alanı, ilk koşumun kişisel makinede kaybolan kurulum bilgisini görünür bir başlangıç noktasına taşımayı hedefler.' },
        { title: 'Bağlam nasıl kaybolmayacak?', description: 'Ayar, bağımlılık, veri referansı ve sürüm bilgisinin deneyle birlikte düşünülmesi; sonucun yanında yeniden üretim yolunu da korumayı amaçlar.' },
        { title: 'Kuruma nasıl uyacak?', description: 'Kapalı ağ, mevcut kimlik sistemi, veri deposu veya kontrollü bulut bağlantısı gibi ihtiyaçlar; gelecekteki mimarinin kuruma göre şekillenen kararları olarak ele alınır.' },
      ],
      storyOutcomeTitle: 'Hedeflenen fark',
      storyOutcomeDescription: 'Tek bir arayüz ya da konteyner değil; deneylerin anlaşılabildiği, devredilebildiği ve uygun altyapıda yeniden koşulabildiği ortak bir çalışma zemini.',
      storyScopeNote: 'Bu bölüm bir ürün yönünü anlatır. Çalışma alanları, entegrasyonlar ve özelleştirilmiş dağıtımlar şu anda canlı işlevler değildir; bu sayfadaki etkileşim yalnızca temsilî bir gösterimdir.',
      workbenchEyebrow: 'Etkileşimli Gösterim',
      workbenchTitle: 'Çalışma alanı akışı nasıl anlatılabilir?',
      workbenchSubtitle: 'Aşağıdaki seçimler temsili bir deney akışını değiştirir; kuyruk, dosya, kullanıcı hesabı veya gerçek koşum yoktur.',
      options: ['Akışkanlar mekaniği deneyi', 'Malzeme modelleme deneyi', 'Model doğrulama deneyi'],
      optionLabel: 'Temsilî deney şablonu',
      runCta: 'Örnek akışı göster',
      resetCta: 'Senaryoyu sıfırla',
      resultIdle: 'Gösterim senaryosu hazır',
      resultDone: 'Örnek çalışma akışı görünür durumda',
      resultDetail: 'Şablon → izole ortam → koşum bağlamı → inceleme kaydı',
      featuresTitle: 'Ürün yönü neyi çözmeyi hedefler?',
      features: [
        { title: 'Şablondan başlama', description: 'Bağımlılıkları ve başlangıç ayarlarını tekrar kurulacak ortamlar yerine açık şablonlarda birleştirmek.' },
        { title: 'Koşum bağlamını saklama', description: 'Yapılandırma, veri referansı ve sürüm bilgisini bir deneyin yanında görünür tutmak.' },
        { title: 'Takım içi devredilebilirlik', description: 'Bir araştırmacının kurduğu çalışma akışını başka bir ekibin anlayıp yeniden çalıştırabilmesini kolaylaştırmak.' },
      ],
      limitsTitle: 'Bu sayfa neyi göstermiyor?',
      limits: ['Canlı Docker/Kubernetes, iş planlayıcı veya bulut hesabı bağlantısı yoktur.', 'Gerçek veri işleme, dosya depolama, hesaplama süresi ya da maliyet ölçümü yapılmaz.', 'Ekrandaki durumlar ürün davranışının sözü değil; ürün düşüncesini açıklayan temsili durumlardır.'],
      closingTitle: 'Araştırma ekibinizin çalışma ritmine göre şekillendirelim.',
      closingText: 'Laboratuvar, kamu projesi veya kurumsal Ar-Ge ekibi için hangi iş akışının anlamlı olduğunu birlikte çerçeveleyebiliriz.',
    },
    compute: {
      name: 'Queva Compute Control',
      label: 'Ürün Konsepti · Güvenli Hesaplama Dağıtımı',
      title: 'Kaynağı görünür, erişimi kontrollü, olayları izlenebilir kılın.',
      subtitle: 'GPU ve konteyner kaynaklarının araştırma ekiplerine politika, kota ve denetlenebilir kayıt yaklaşımıyla dağıtılması için bir ürün yönü değerlendiriyoruz.',
      pain: 'Paylaşılan hesaplama altyapısında “kim, neyi, hangi yetkiyle ve ne kadar kullandı?” sorusu açık değilse kaynak planlama, maliyet takibi ve güvenlik aynı anda zorlaşır.',
      image: '/compute-control-concept.png',
      alt: 'Güvenli GPU ve konteyner kaynak yönetimini anlatan soyut Queva Compute Control görseli',
      metaTitle: 'Queva Compute Control Ürün Konsepti | Güvenli GPU ve Konteyner Yönetimi',
      metaDescription: 'Queva Compute Control, politika tabanlı GPU/container erişimi ve denetlenebilir kayıt mimarisi için ürün konseptidir. Canlı hizmet değildir.',
      primaryCta: 'Gösterim senaryosunu aç',
      contactCta: 'İhtiyacınızı konuşalım',
      demoNotice: 'Bu arayüz etkileşimli bir ürün gösterimidir. Gerçek GPU tahsisi, kimlik doğrulama, faturalama, kota tüketimi veya altyapı çağrısı yapmaz.',
      storyEyebrow: 'Bir GPU Saatinin Arkasındaki Karar',
      storyTitle: 'Hesaplama kaynağı sadece kapasite değil; erişim, bütçe ve sorumluluktur.',
      storySubtitle: 'Paylaşılan altyapıda asıl soru “kaç GPU var?” değil; “kim, hangi bağlamda, hangi veriye yakın ve hangi kuralla çalışabilir?” sorusudur.',
      storyParagraphs: [
        'Bir ekip GPU kaynağı istediğinde iş çoğu zaman basit bir talep gibi başlar. Bir mesaj atılır, uygun makine aranır, erişim açılır ve işin tamamlanması beklenir. Proje sayısı arttıkça bu küçük istisnalar birikir: Hangi iş öncelikliydi, hangi kaynağın hangi bütçeden karşılandığı belliydi mi, erişim hâlâ gerekli mi, hassas veri doğru ortamda mı kaldı?',
        'Bu noktada yalnızca güvenli bir ağ kurmak yetmez. Korumalı bir hesaplama ortamı; doğru kimliğin, doğru projenin, doğru veri yolunun, doğru izolasyonun ve kurumun mevcut mimarisiyle uyumlu bir erişim kararının birlikte çalışması demektir. Bunlardan biri koparsa ekip ya işi yavaşlatan onaylara ya da sonradan açıklanması zor istisnalara mahkûm kalır.',
        'Queva Compute Control fikri tam bu gerilimden doğar. Hedef, herkese aynı GPU bulutunu sunmak ya da yalnızca daha ucuz GPU-saat satmak değildir. Hedef; kaynak tahsisini görünür kuralları olan, iş bağlamını bilen ve sorumluluğu baştan tanımlayan bir yönetişim kararına dönüştürmektir.',
        'Kurum kendi tesisindeki kümeyi, özel bulutunu veya kontrollü bir kiracı alanını korumak isteyebilir. Kimlik yönetimi, ağ sınırı, veri sınıflandırması, iş planlayıcı ve maliyet modeli de kurumdan kuruma değişir. Bu yüzden ürün yönü; tek bir merkezî kurulum dayatmak yerine, güvenli ağ sınırlarına, uçtan uca entegrasyon ihtiyacına ve özelleştirilebilir dağıtım modeline uyum sağlayabilecek bir mimari yaklaşım olarak tasarlanır.',
        'Böylece GPU saati yalnızca tüketilen bir sayaç olmaktan çıkar. Her tahsis, neden verildiği anlaşılabilen; gerektiğinde gözden geçirilebilen ve kurumun kendi kontrol modeline bağlanabilen bir kararın parçası hâline gelir.',
      ],
      storyPullQuote: 'Hassas hesaplama bir kuyruk problemi değildir. Kimin, hangi bağlamda, hangi kaynakla çalışabileceğine dair bir yönetişim kararıdır.',
      storyStepsEyebrow: 'Kapasiteden Kontrollü Erişime',
      storySteps: [
        { title: 'Erişimi kim alacak?', description: 'Kimlik, ekip rolü, proje ve iş yükü sınıfı birlikte değerlendirilerek; talebin açık bir politika bağlamında ele alınması hedeflenir.' },
        { title: 'İş nerede çalışacak?', description: 'Kapalı ağ, izole düğüm, kurum içi küme, özel bulut ya da kontrollü kiracı gibi seçenekler; kuruma göre uyarlanacak dağıtım kararlarıdır.' },
        { title: 'Ne görünür olmalı?', description: 'Talep, politika kararı, kaynak yaşam döngüsü ve kullanım modeli; sonradan açıklanabilen bir denetim akışının yapı taşları olarak düşünülür.' },
      ],
      storyOutcomeTitle: 'Hedeflenen fark',
      storyOutcomeDescription: 'Yalnızca GPU kaynağı satın almak değil; hassas iş yüklerinin güvenli, anlaşılabilir ve kuruma uyumlu biçimde dağıtılacağı bir yönetim yolu kurmak.',
      storyScopeNote: 'Bu bölüm bir ürün yönünü anlatır. Güvenli ağ, kimlik entegrasyonu, kaynak tahsisi ve olay kayıtları bu arayüzde canlı olarak çalışmaz; gösterilen akış yalnızca temsilî bir senaryodur.',
      workbenchEyebrow: 'Etkileşimli Gösterim',
      workbenchTitle: 'Politika odaklı tahsis yaklaşımı',
      workbenchSubtitle: 'Aşağıdaki seçenekler yalnızca temsili bir karar akışını değiştirir; gerçek bir küme, kullanıcı ya da kullanım kaydı yoktur.',
      options: ['Araştırma koşumu', 'Korumalı veri işi', 'Zamanlanmış doğrulama'],
      optionLabel: 'Temsilî iş yükü sınıfı',
      runCta: 'Örnek kararı göster',
      resetCta: 'Senaryoyu sıfırla',
      resultIdle: 'Politika senaryosu hazır',
      resultDone: 'Temsilî politika kararı görünür durumda',
      resultDetail: 'Erişim politikası → izole iş yükü → temsilî GPU-saat modeli → olay kaydı taslağı',
      featuresTitle: 'Ürün yönü neyi çözmeyi hedefler?',
      features: [
        { title: 'Politika tabanlı erişim', description: 'Proje, ekip ve iş yükü bağlamına göre hangi kaynakların talep edilebileceğini açık kurallara bağlamak.' },
        { title: 'GPU-saat için görünür model', description: 'Kota ve tahsis yaklaşımını paydaşların anlayabileceği bir muhasebe modeliyle tasarlamak.' },
        { title: 'İzlenebilir olay mimarisi', description: 'Talepler, kararlar ve yaşam döngüsü olayları için denetim ihtiyacına uygun kayıt akışını planlamak.' },
      ],
      limitsTitle: 'Şeffaflık ve kanıtlanabilirlik sınırı',
      limits: ['Ekrandaki olaylar temsili örneklerdir; değiştirilmez günlük, imza veya haricî doğrulama içermez.', '“Kanıt” iddiası için imzalı olaylar, kalıcı eklemeli depolama ve bağımsız doğrulanabilir bir kök/attestasyon mekanizması gerekir.', 'Gerçek kaynak, kota, maliyet veya kullanıcı telemetrisi bu gösterimde toplanmaz ve görüntülenmez.'],
      closingTitle: 'Altyapı yönetişimini ihtiyacınıza göre tasarlayalım.',
      closingText: 'Araştırma merkezi, kamu projesi veya kurumsal ekip için güvenli tahsis ve kayıt mimarisini birlikte değerlendirebiliriz.',
    },
  },
  en: {
    simlab: {
      name: 'Queva SimLab',
      label: 'Product Concept · Digital Simulation Workspace',
      title: 'Turn simulation work into a repeatable workspace.',
      subtitle: 'We are evaluating a product direction that brings container templates, experiment context, and shared working practices together.',
      pain: 'When notes are scattered, environments are assembled by hand, and runs remain on personal machines, reproducibility is usually the first thing to disappear.',
      image: '/simlab-workspace-concept.png',
      alt: 'Abstract Queva SimLab visual representing a container-based simulation workspace',
      metaTitle: 'Queva SimLab Product Concept | Repeatable Simulation Workspace',
      metaDescription: 'Queva SimLab is a product concept for container-based experiment templates and repeatable simulation runs. It is not a live service.',
      primaryCta: 'Open the demo scenario',
      contactCta: 'Discuss your needs',
      demoNotice: 'This interface is an interactive product demonstration. It does not create a real workspace, start containers, or connect to data or compute resources.',
      storyEyebrow: 'The Journey of an Experiment',
      storyTitle: 'Research should not be trapped on the computer of the person who set it up.',
      storySubtitle: 'The value of a simulation is not only that it runs today, but that another team can understand it tomorrow.',
      storyParagraphs: [
        'For a research or engineering team, the first run is usually exciting. The model runs, a result arrives, and everyone moves to the next step. Days later, when the same experiment must be run again, the team starts searching: which library was used, which setting changed, and which version of the data was processed?',
        'When files are spread across personal folders, notes live in messaging apps, and environment settings exist in one person’s memory, the team is no longer managing a simulation. It is managing a problem of recall. Information flow breaks when that person is away, a machine changes, or an internal network boundary shifts.',
        'The Queva SimLab idea begins there. The aim is not simply to “run Docker.” It is to turn the experiment template, data and configuration context, and working flow into a workspace the whole team can discuss and understand.',
        'No two institutions have the same infrastructure. Some teams need to remain on an internal closed network; others need controlled cloud resources; others must work end to end with established identity, data, and job-planning systems. The product direction is therefore conceived as a working model that can be shaped around an institution, rather than a one-size-fits-all deployment.',
        'The intended outcome is to turn “it ran once” into a research asset that can be understood, handed over, and run again in an appropriate environment.',
      ],
      storyPullQuote: 'A simulation does not only produce an outcome. When it is set up well, it preserves the route back to that outcome.',
      storyStepsEyebrow: 'Not Just a System: A Shared Working Memory',
      storySteps: [
        { title: 'Where will the experiment live?', description: 'A container template and isolated workspace are intended to bring setup knowledge out of one personal machine and into a visible starting point.' },
        { title: 'How will context remain?', description: 'Thinking about settings, dependencies, data references, and version information alongside the experiment helps preserve the route to reproduce a result.' },
        { title: 'How will it fit the institution?', description: 'A closed network, existing identity system, data store, or controlled cloud connection are future architecture choices to be shaped around the institution.' },
      ],
      storyOutcomeTitle: 'The intended difference',
      storyOutcomeDescription: 'Not one interface or one container, but a shared foundation where experiments can be understood, handed over, and rerun on suitable infrastructure.',
      storyScopeNote: 'This section describes a product direction. Workspaces, integrations, and customised deployments are not live functions today; the interaction on this page is illustrative only.',
      workbenchEyebrow: 'Interactive Demonstration',
      workbenchTitle: 'How could a workspace flow be explained?',
      workbenchSubtitle: 'The choices below change a representative experiment flow; there is no queue, file, user account, or live run.',
      options: ['Fluid dynamics experiment', 'Materials modelling experiment', 'Model validation experiment'],
      optionLabel: 'Representative experiment template',
      runCta: 'Show example flow',
      resetCta: 'Reset scenario',
      resultIdle: 'Demo scenario is ready',
      resultDone: 'Example workflow is visible',
      resultDetail: 'Template → isolated environment → run context → review record',
      featuresTitle: 'What is this product direction meant to solve?',
      features: [
        { title: 'Start from a template', description: 'Bring dependencies and initial settings into explicit templates instead of repeatedly rebuilt environments.' },
        { title: 'Keep run context', description: 'Make configuration, data references, and version context visible alongside an experiment.' },
        { title: 'Hand off across the team', description: 'Help another team understand and rerun a workflow established by a researcher.' },
      ],
      limitsTitle: 'What does this page not demonstrate?',
      limits: ['There is no live Docker/Kubernetes, scheduler, or cloud-account connection.', 'No data processing, file storage, compute time, or cost measurement takes place.', 'The shown states are illustrative, not a promise of shipped product behaviour.'],
      closingTitle: 'Shape it around your research team’s working rhythm.',
      closingText: 'Together, we can frame which workflow would matter for a lab, public project, or corporate R&D team.',
    },
    compute: {
      name: 'Queva Compute Control',
      label: 'Product Concept · Secure Compute Distribution',
      title: 'Make resources visible, access controlled, and events traceable.',
      subtitle: 'We are evaluating a product direction for distributing GPU and container resources to research teams through policies, quotas, and an auditable-record approach.',
      pain: 'In shared compute infrastructure, planning, cost governance, and security become difficult when it is unclear who used which resource, under which authority, and for how long.',
      image: '/compute-control-concept.png',
      alt: 'Abstract Queva Compute Control visual representing secure GPU and container resource governance',
      metaTitle: 'Queva Compute Control Product Concept | Secure GPU and Container Governance',
      metaDescription: 'Queva Compute Control is a product concept for policy-based GPU/container access and auditable record architecture. It is not a live service.',
      primaryCta: 'Open the demo scenario',
      contactCta: 'Discuss your needs',
      demoNotice: 'This interface is an interactive product demonstration. It makes no real GPU allocation, authentication, billing, quota consumption, or infrastructure call.',
      storyEyebrow: 'The Decision Behind a GPU Hour',
      storyTitle: 'Compute capacity is not only capacity; it is access, budget, and responsibility.',
      storySubtitle: 'In shared infrastructure, the key question is not “how many GPUs do we have?” but “who can work, in which context, close to which data, and under which rule?”',
      storyParagraphs: [
        'When a team requests GPU capacity, the work often starts as a simple request. A message is sent, an available machine is found, access is opened, and the team waits for the job to finish. As projects multiply, small exceptions accumulate: Which work was a priority? Was the right budget charged? Is access still needed? Did sensitive data remain in the right environment?',
        'At that point, a secure network alone is not enough. A protected compute environment means that the right identity, project, data path, isolation, and access decision all work together with the institution’s existing architecture. If one of those links breaks, a team is left either with approvals that slow the work or exceptions that are difficult to explain later.',
        'The Queva Compute Control idea begins with this tension. The aim is not to offer every team the same GPU cloud, or simply sell cheaper GPU hours. It is to turn resource allocation into a governance decision with visible rules, meaningful workload context, and responsibility defined from the start.',
        'An institution may need to retain its on-premise cluster, private cloud, or controlled tenant. Its identity management, network boundaries, data classification, scheduler, and cost model will also vary. The product direction is therefore designed as an architectural approach that could fit secure network boundaries, end-to-end integration needs, and a customisable deployment model rather than impose one central setup.',
        'In that model, a GPU hour becomes more than a consumption counter. Each allocation becomes part of a decision that can be understood, reviewed when needed, and connected to the institution’s own model of control.',
      ],
      storyPullQuote: 'Sensitive compute is not a queue problem. It is a governance decision about who may work, in which context, and with which resource.',
      storyStepsEyebrow: 'From Capacity to Controlled Access',
      storySteps: [
        { title: 'Who receives access?', description: 'Identity, team role, project, and workload class are intended to be considered together, so that each request has an explicit policy context.' },
        { title: 'Where will the workload run?', description: 'A closed network, isolated node, on-premise cluster, private cloud, or controlled tenant are deployment choices to be adapted for the institution.' },
        { title: 'What should remain visible?', description: 'The request, policy decision, resource lifecycle, and usage model are conceived as the building blocks of an audit flow that can be explained later.' },
      ],
      storyOutcomeTitle: 'The intended difference',
      storyOutcomeDescription: 'Not only buying GPU capacity, but establishing a route for distributing sensitive workloads securely, understandably, and in a way that fits the institution.',
      storyScopeNote: 'This section describes a product direction. Secure networking, identity integration, resource allocation, and event records do not run live in this interface; the shown flow is an illustrative scenario only.',
      workbenchEyebrow: 'Interactive Demonstration',
      workbenchTitle: 'A policy-led allocation approach',
      workbenchSubtitle: 'The choices below only change a representative decision flow; there is no live cluster, user, or usage record.',
      options: ['Research run', 'Protected-data job', 'Scheduled validation'],
      optionLabel: 'Representative workload class',
      runCta: 'Show example decision',
      resetCta: 'Reset scenario',
      resultIdle: 'Policy scenario is ready',
      resultDone: 'Representative policy decision is visible',
      resultDetail: 'Access policy → isolated workload → representative GPU-hour model → event-record outline',
      featuresTitle: 'What is this product direction meant to solve?',
      features: [
        { title: 'Policy-based access', description: 'Define which resources can be requested based on project, team, and workload context.' },
        { title: 'A visible GPU-hour model', description: 'Design quota and allocation around an accounting model that stakeholders can understand.' },
        { title: 'Traceable event architecture', description: 'Plan an event flow for requests, decisions, and lifecycle events that serves audit needs.' },
      ],
      limitsTitle: 'The boundary of transparency and proof',
      limits: ['The events on screen are illustrative; they are not an immutable log, signed record, or independently verified result.', 'A proof claim would require signed events, durable append-only storage, and an independently verifiable root or attestation mechanism.', 'No real resource, quota, cost, or user telemetry is collected or displayed in this demonstration.'],
      closingTitle: 'Design infrastructure governance around your needs.',
      closingText: 'We can evaluate a secure allocation and event-record architecture for a research centre, public project, or corporate team.',
    },
  },
};

export function ProductConceptPage({ product }: { product: ProductConcept }) {
  const { i18n } = useTranslation();
  const language: Language = i18n.resolvedLanguage === 'en' ? 'en' : 'tr';
  const content = copy[language][product];
  const [selected, setSelected] = useState(0);
  const [scenarioShown, setScenarioShown] = useState(false);
  const isCompute = product === 'compute';

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://queva.tech/${isCompute ? 'compute-control-demo' : 'simlab-demo'}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={content.metaTitle} />
        <meta property="og:description" content={content.metaDescription} />
        <meta property="og:image" content={`https://queva.tech${content.image}`} />
      </Helmet>

      <section className="relative isolate overflow-hidden bg-[#09182a] px-4 pb-16 pt-28 sm:pb-20 sm:pt-36">
        <img src={content.image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,24,42,0.98)_0%,rgba(9,24,42,0.82)_48%,rgba(9,24,42,0.42)_100%)]" aria-hidden="true" />
        <div className="absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-[#d4b038]/20 blur-3xl" aria-hidden="true" />
        <div className="container mx-auto max-w-6xl">
          <p className="qt-eyebrow text-[#f1c75b]">{content.label}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">{content.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">{content.subtitle}</p>
          <p className="mt-5 max-w-3xl border-l-2 border-[#d4b038] pl-4 leading-7 text-slate-300">{content.pain}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#concept-workbench" className="inline-flex justify-center rounded-full bg-[var(--queva-gold)] px-6 py-3 font-bold text-[var(--queva-midnight)] transition-transform hover:-translate-y-0.5">{content.primaryCta}</a>
            <Link to="/#contact" className="inline-flex justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20">{content.contactCta}</Link>
          </div>
          <p className="mt-7 max-w-4xl rounded-xl border border-white/15 bg-[#09182a]/75 px-4 py-3 text-sm leading-6 text-slate-300 backdrop-blur">{content.demoNotice}</p>
        </div>
      </section>

      <section id={`${product}-story`} className="dark scroll-mt-24 overflow-hidden bg-[#09182a] px-4 py-20 sm:py-24">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading eyebrow={content.storyEyebrow} title={content.storyTitle} subtitle={content.storySubtitle} />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.16fr_0.84fr]">
            <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-9">
              {content.storyParagraphs.map((paragraph, index) => (
                <div key={paragraph}>
                  <p className={index === 0 ? 'text-lg leading-8 text-slate-200' : 'mt-5 leading-8 text-slate-300'}>{paragraph}</p>
                  {index === 1 && (
                    <div className="mt-7 border-l-2 border-[var(--queva-gold)] bg-[var(--queva-gold)]/10 px-5 py-4 text-lg font-semibold leading-8 text-[#f7df96]">
                      {content.storyPullQuote}
                    </div>
                  )}
                </div>
              ))}
            </article>

            <aside className="rounded-3xl border border-[var(--queva-gold)]/25 bg-[#07111d] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f1c75b]">{content.storyStepsEyebrow}</p>
              <div className="mt-6 space-y-5">
                {content.storySteps.map((step, index) => (
                  <div key={step.title} className="relative border-l border-white/10 pl-6 last:border-l-0">
                    <span className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-[#f1c75b]/50 bg-[#09182a] font-mono text-[10px] font-bold text-[#f1c75b]">0{index + 1}</span>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{step.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm font-bold text-[#f7df96]">{content.storyOutcomeTitle}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{content.storyOutcomeDescription}</p>
              </div>
            </aside>
          </div>
          <p className="mx-auto mt-7 max-w-5xl text-center text-sm leading-6 text-slate-400">{content.storyScopeNote}</p>
        </div>
      </section>

      <section id="concept-workbench" className="scroll-mt-24 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading eyebrow={content.workbenchEyebrow} title={content.workbenchTitle} subtitle={content.workbenchSubtitle} />
          <div className="mt-9 grid overflow-hidden rounded-3xl border border-[var(--queva-gold)]/25 bg-[#09182a] shadow-[0_24px_60px_rgba(15,23,42,0.17)] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-8">
              <label className="text-sm font-semibold text-slate-300" htmlFor={`${product}-scenario`}>{content.optionLabel}</label>
              <div id={`${product}-scenario`} className="mt-4 grid gap-3" role="group" aria-label={content.optionLabel}>
                {content.options.map((option, index) => (
                  <button key={option} type="button" onClick={() => { setSelected(index); setScenarioShown(false); }} className={`rounded-xl border px-4 py-4 text-left text-sm font-semibold transition-colors ${selected === index ? 'border-[#d4b038] bg-[#d4b038]/15 text-white' : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'}`}>
                    <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-current text-xs">{index + 1}</span>{option}
                  </button>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button type="button" onClick={() => setScenarioShown(true)} className="rounded-full bg-[var(--queva-gold)] px-5 py-2.5 text-sm font-bold text-[var(--queva-midnight)] transition-transform hover:-translate-y-0.5">{content.runCta}</button>
                <button type="button" onClick={() => setScenarioShown(false)} className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10">{content.resetCta}</button>
              </div>
            </div>
            <div className="border-t border-white/10 bg-black/20 p-6 sm:p-8 lg:border-l lg:border-t-0">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#f1c75b]"><span className="h-2 w-2 rounded-full bg-[#f1c75b]" />{scenarioShown ? content.resultDone : content.resultIdle}</div>
              <p className="mt-5 text-xl font-bold text-white">{content.options[selected]}</p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-[#07111d] p-5 font-mono text-sm leading-7 text-slate-300">
                <p><span className="text-[#f1c75b]">01</span> {isCompute ? 'policy.scope = representative-workload' : 'template.scope = representative-experiment'}</p>
                <p><span className="text-[#f1c75b]">02</span> {isCompute ? 'allocation.mode = isolated-example' : 'workspace.mode = isolated-example'}</p>
                <p><span className="text-[#f1c75b]">03</span> {isCompute ? 'usage.model = illustrative-gpu-hour' : 'run.context = illustrative-only'}</p>
                <p><span className="text-[#f1c75b]">04</span> event.status = {scenarioShown ? 'shown-in-demo' : 'not-executed'}</p>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">{content.resultDetail}</p>
              <p className="mt-4 rounded-lg bg-white/5 px-3 py-2 text-xs leading-5 text-slate-400">{content.demoNotice}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading eyebrow={content.name} title={content.featuresTitle} subtitle="" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {content.features.map((feature, index) => (
              <article key={feature.title} className="glass-card rounded-2xl p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--queva-gold)] font-mono text-sm font-bold text-[var(--queva-midnight)]">0{index + 1}</span>
                <h2 className="mt-5 text-xl font-bold text-[var(--fg1)]">{feature.title}</h2>
                <p className="mt-3 leading-7 text-[var(--fg2)]">{feature.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-[var(--queva-gold)]/25 bg-[var(--queva-gold)]/10 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-[var(--fg1)]">{content.limitsTitle}</h2>
            <ul className="mt-5 space-y-3">
              {content.limits.map((limit) => <li key={limit} className="flex gap-3 leading-7 text-[var(--fg2)]"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--queva-gold)]" />{limit}</li>)}
            </ul>
          </div>
          <div className="mt-10 rounded-3xl bg-[#09182a] p-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.16)] sm:p-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{content.closingTitle}</h2>
            <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-300">{content.closingText}</p>
            <Link to="/#contact" className="mt-7 inline-flex rounded-full bg-[var(--queva-gold)] px-6 py-3 font-bold text-[var(--queva-midnight)] transition-transform hover:-translate-y-0.5">{content.contactCta}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
