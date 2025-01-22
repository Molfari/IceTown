import { _decorator, Component, sys } from 'cc';
const { ccclass } = _decorator;

@ccclass('MapLoader')
export class MapLoader extends Component {
    start() {
        // Вказати абсолютний шлях до локального сервера
        const htmlPath = 'http://127.0.0.1:8080/map.html';

        // Відкриття HTML-файлу
        sys.openURL(htmlPath);
    }
}