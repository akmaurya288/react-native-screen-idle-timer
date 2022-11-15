package com.screenidletimer;

import android.app.Activity;
import android.view.WindowManager;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = ScreenIdleTimerModule.NAME)
public class ScreenIdleTimerModule extends ReactContextBaseJavaModule {
  public static final String NAME = "ScreenIdleTimer";

  public ScreenIdleTimerModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void activate() {
    final Activity activity = getCurrentActivity();

    if(activity != null){
      activity.runOnUiThread(new Runnable() {
        @Override
        public void run() {
          activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        }
      });
    }
  }

  @ReactMethod
  public void deactivate() {
    final Activity activity = getCurrentActivity();

    if(activity != null){
      activity.runOnUiThread(new Runnable() {
        @Override
        public void run() {
          activity.getWindow().clearFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        }
      });
    }
  }
}
