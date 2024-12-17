// Target
interface MediaPlayer {
    play(audioType: string, fileName: string): void;
  }
  
  // Adaptee
  class AdvancedMediaPlayer {
    playVlc(fileName: string): void {
      console.log(`Playing vlc file: ${fileName}`);
    }
  
    playMp4(fileName: string): void {
      console.log(`Playing mp4 file: ${fileName}`);
    }
  }
  
  // Adapter
  class MediaAdapter implements MediaPlayer {
    private advancedMusicPlayer: AdvancedMediaPlayer;
  
    constructor(audioType: string) {
      this.advancedMusicPlayer = new AdvancedMediaPlayer();
    }
  
    play(audioType: string, fileName: string): void {
      if (audioType === "vlc") {
        this.advancedMusicPlayer.playVlc(fileName);
      } else if (audioType === "mp4") {
        this.advancedMusicPlayer.playMp4(fileName);
      }
    }
  }
  
  // Client: استفاده از Adapter برای اجرای سیستم
  class AudioPlayer implements MediaPlayer {
    private mediaAdapter: MediaAdapter;
  
    play(audioType: string, fileName: string): void {
      if (audioType === "mp3") {
        console.log(`Playing mp3 file: ${fileName}`);
      } else if (audioType === "vlc" || audioType === "mp4") {
        this.mediaAdapter = new MediaAdapter(audioType);
        this.mediaAdapter.play(audioType, fileName);
      } else {
        console.log(`Invalid media. ${audioType} format not supported`);
      }
    }
  }
  
 
  const audioPlayer = new AudioPlayer();
  
  audioPlayer.play("mp3", "song1.mp3");
  audioPlayer.play("mp4", "video1.mp4");
  audioPlayer.play("vlc", "movie1.vlc");
  audioPlayer.play("avi", "movie2.avi");
  