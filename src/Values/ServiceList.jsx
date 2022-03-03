import {
  kubernetsImage,
  openStackImage,
  automationImage,
  publicServerCloudImage,
} from "../Values/Image";

export const serviceList = [
  {
    heading: "Kubernetes and Microservices architecture",
    content: `Microservices architecture and technologies like
    Kubernetes and Docker promises a lot, but are equally
    challenging to setup, maintain and sometime make sense
    off. Our experienced solutions architects will help you
    decide if and how your requirements fits these
    technologies and find the most cost affective way to try
    these technologies and biring to production use.`,
    detail1: `We combine our expertise and knowledge in software development,
    as well as leadership, strategy and operations to create unique
    digital advantages that will help our customers innovate at
    speed and scale.`,
    detail2: `Our aim is to help you optimized and simplify your infastructure
    such that you can accelerate innovation with one or many of the
    existing cloud technologies. Want to run Kubernetes, on-premise
    cloud, use AWS or Google cloud we are here to help you move to
    these technologis as your most cost effective partner.`,
    image: kubernetsImage,
  },
  {
    heading: "Openstack Private Cloud",
    content: `Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a
    type specimen book. It has survived not only five
    centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged.`,
    detail1: `It is a long established fact that a reader will be distracted
    by the readable content of a page when looking at its layout.
    The point of using Lorem Ipsum is that it has a more-or-less
    normal distribution of letters, as opposed to using 'Content
    here, content here', making it look like readable English.`,
    detail2: `Many desktop publishing packages and web page editors now use Lorem
    Ipsum as their default model text, and a search for 'lorem
    ipsum' will uncover many web sites still in their infancy.
    Various versions have evolved over the years, sometimes by
    accident, sometimes on purpose (injected humour and the like).`,
    image: openStackImage,
  },
  {
    heading: "Public Cloud Server",
    content: `Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a
    type specimen book. It has survived not only five
    centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged.`,
    detail1: `It is a long established fact that a reader will be distracted
    by the readable content of a page when looking at its layout.
    The point of using Lorem Ipsum is that it has a more-or-less
    normal distribution of letters, as opposed to using 'Content
    here, content here', making it look like readable English.`,
    detail2: `Many desktop publishing packages and web page editors now use Lorem
    Ipsum as their default model text, and a search for 'lorem
    ipsum' will uncover many web sites still in their infancy.
    Various versions have evolved over the years, sometimes by
    accident, sometimes on purpose (injected humour and the like).`,
    image: publicServerCloudImage,
  },
  {
    heading: "Monitoring and Automation Services",
    content: `Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a
    type specimen book. It has survived not only five
    centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged.`,
    detail1: `It is a long established fact that a reader will be distracted
    by the readable content of a page when looking at its layout.
    The point of using Lorem Ipsum is that it has a more-or-less
    normal distribution of letters, as opposed to using 'Content
    here, content here', making it look like readable English.`,
    detail2: `Many desktop publishing packages and web page editors now use Lorem
    Ipsum as their default model text, and a search for 'lorem
    ipsum' will uncover many web sites still in their infancy.
    Various versions have evolved over the years, sometimes by
    accident, sometimes on purpose (injected humour and the like).`,
    image: automationImage,
  },
];
