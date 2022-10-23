interface IImageContext {
  setMainImage: (mainImage:string) => void,
  mainImage: string,
  gallery : string[],
}
export default IImageContext;
