/**
 * Ein Buch
 */
export interface Book {
  /**
   * Die ISBN
   * @link
   */
  isbn: string;
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
  numPages?: number;
  /**
   * Die Beschreibung
   */
  abstract?: string;
}
