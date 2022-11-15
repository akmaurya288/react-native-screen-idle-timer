#import "ScreenIdleTimer.h"
#import "UIKit/UIKit.h"

@implementation ScreenIdleTimer
RCT_EXPORT_MODULE()

RCT_REMAP_METHOD(activate)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        [[UIApplication sharedApplication] setIdleTimerDisabled:YES];
    });
}

RCT_REMAP_METHOD(deactivate)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        [[UIApplication sharedApplication] setIdleTimerDisabled:NO];
    });
}

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeScreenIdleTimerSpecJSI>(params);
}
#endif

@end
