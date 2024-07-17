export function scrollTo(sectionId: string) {
  const service = document.getElementById(sectionId);

  if (service) {
    window.scrollTo({
      top: service.offsetTop,
      behavior: "smooth",
    });
  }
}
