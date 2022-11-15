
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNScreenIdleTimerSpec.h"

@interface ScreenIdleTimer : NSObject <NativeScreenIdleTimerSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ScreenIdleTimer : NSObject <RCTBridgeModule>
#endif

@end
