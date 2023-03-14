export interface ITestimonial {
  testimonial: string;
  customer: {
    name: string;
    position?: string;
    img?: string;
  };
}
