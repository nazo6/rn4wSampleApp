#include "pch.h"
#include "ReactPackageProvider.h"
#include "NativeModules.h"

#include "MouseHandler.h"

using namespace winrt::Microsoft::ReactNative;

namespace winrt::rn4wSampleApp::implementation
{

void ReactPackageProvider::CreatePackage(IReactPackageBuilder const &packageBuilder) noexcept
{
    AddAttributedModules(packageBuilder);
}

} // namespace winrt::rn4wSampleApp::implementation
