/**
 * Sound Manager: Handle retro arcade sound effects
 * 
 * Manages audio playback for game events:
 * - Puck collisions with walls and pins
 * - Goal scoring
 * - Victory fanfare
 */

export type SoundEffect = 'collision' | 'goal';

interface SoundConfig {
  url: string;
  volume: number;
}

const SOUND_CONFIGS: Record<SoundEffect, SoundConfig> = {
  collision: {
    url: '/manus-storage/bounce-sound_9737713f.mp3',
    volume: 0.5,
  },
  goal: {
    url: '/manus-storage/goal-sound_200df31a.mp3',
    volume: 0.6,
  },
};

class SoundManager {
  private audioContext: AudioContext | null = null;
  private soundCache: Map<SoundEffect, AudioBuffer> = new Map();
  private isInitialized = false;

  /**
   * Initialize the audio context (required for browser autoplay policies)
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.isInitialized = true;
      console.log('SoundManager initialized');
    } catch (error) {
      console.error('Failed to initialize AudioContext:', error);
    }
  }

  /**
   * Preload a sound effect
   */
  async preloadSound(effect: SoundEffect): Promise<void> {
    if (this.soundCache.has(effect)) return;
    if (!this.audioContext) await this.initialize();

    try {
      const config = SOUND_CONFIGS[effect];
      const response = await fetch(config.url);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await this.audioContext!.decodeAudioData(arrayBuffer);
      this.soundCache.set(effect, audioBuffer);
      console.log(`Preloaded sound: ${effect}`);
    } catch (error) {
      console.error(`Failed to preload sound ${effect}:`, error);
    }
  }

  /**
   * Play a sound effect
   */
  async play(effect: SoundEffect): Promise<void> {
    if (!this.audioContext) await this.initialize();
    if (!this.audioContext) return; // Still no context, bail out

    try {
      // Preload if not already cached
      if (!this.soundCache.has(effect)) {
        await this.preloadSound(effect);
      }

      const audioBuffer = this.soundCache.get(effect);
      if (!audioBuffer) return;

      const config = SOUND_CONFIGS[effect];
      const source = this.audioContext.createBufferSource();
      const gainNode = this.audioContext.createGain();

      source.buffer = audioBuffer;
      gainNode.gain.value = config.volume;

      source.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      source.start(0);
    } catch (error) {
      console.error(`Failed to play sound ${effect}:`, error);
    }
  }

  /**
   * Preload all sounds
   */
  async preloadAll(): Promise<void> {
    await Promise.all([
      this.preloadSound('collision'),
      this.preloadSound('goal'),
    ]);
  }
}

// Export singleton instance
export const soundManager = new SoundManager();
