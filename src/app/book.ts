/**
 * Ein Buch
 */
export interface Book {
  /**
   * Der Titel
   */
  title: string;
  /**
   * Autor*in
   */
  author: string;
  /**
   * Die Anzahl der Seiten
   */
  numPages: number;
  /**
   * Die Beschreibung
   */
  abstract?: string;
}
