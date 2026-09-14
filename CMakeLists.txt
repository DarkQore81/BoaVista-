cmake_minimum_required(VERSION 3.15)
project(BoaVista_Mobile VERSION 1.0.0)

# Haal het JUCE framework automatisch op uit de cloud
include(FetchContent)
FetchContent_Declare(
    juce
    GIT_REPOSITORY https://github.com/juce-framework/JUCE.git
    GIT_TAG        master
)
FetchContent_MakeAvailable(juce)

# Bouw de Android App carrosserie
juce_add_gui_app(BoaVista_apk
    PRODUCT_NAME "Boa Vista"
    BUNDLE_ID "com.tonykeeler.boavista"
    DISPLAY_NAME "Boa Vista Tactical"
)

# Koppel de motor en het dashboard eraan vast
target_sources(BoaVista_apk PRIVATE
    MainComponent.h
    HNAK_UnifiedEngine.h
)

# Activeer de benodigde JUCE onderdelen
target_link_libraries(BoaVista_apk PRIVATE
    juce::juce_core
    juce::juce_data_structures
    juce::juce_events
    juce::juce_graphics
    juce::juce_gui_basics
    juce::juce_gui_extra
)
